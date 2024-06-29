+++
title = 'Notes on SAML and SCIM'
author = 'Ethan Zhang'
description = 'Some notes on SAML2 and SCIM that I prepared for my manager during my internship at John Deere'
date = '2024-06-11'
isPost = true
draft = false
+++

## What is SAML?

The Security Assertion Markup Language (SAML) is an XML-based standard for communicating authentication information between multiple parties.
Its most common use case is in providing federated identity and single sign-on (SSO) functionality,
which allow for employees at Deere to login once with a single set of credentials and use that same identity across multiple external services.

## The Standard

There are three participants in the SAML flow:

- the Identity Provider (IdP), e.g. Okta,
- the Subject, i.e. the user's browser, and
- the Service Provider (SP), e.g. Zuora, Rally, etc.

The standard defines an XML schema for *assertions* from one party to another.
An assertion is made up of some metadata (e.g. who is the subject)
and a series of *statements*, which take on one of three forms:

- Authentication (how and when did the subject authenticate)
- Attribute (key-value pairs representing properties of the subject, such as email address, group membership, etc.)
- Authorization Decision ($X$ is authorized to do $Y$ on $Z$)

Additionally, the standard defines a format for metadata that describe configuration information for a service's 
metadata often includes information about the role of the service, the public key for verifying the assertion, and more.

## The SSO Flow

These notes will focus on the redirect based flow, where the browser brokers the authentication.
Of such flows, there are two types, depending on whether the SP or the IdP initiates the flow.

### SP-Initiated

1. Subject requests a resource from the SP.
2. SP checks if browser has as security context:
   If yes, skip to 7.
   Else, redirect with a `GET` to IdP with two query parameters:
    - `SamlRequest`: Base64 encoded XML
    - `RelayState`: any state that needs to be kept track of, e.g. deep links
3. IdP checks if browser has a security context.
   If not, prompt user for credentials.
4. IdP generates a SAML assertion and puts it in an xhtml document as a hidden form.
   Sign the assertion with private key and redirect with a `POST` to SP.
   Echo the `RelayState` back to the SP.
5. SP verifies the authenticity of the assertion with IdP's public key.
   If valid, SP generates a security context and forwards it to the subject.
6. Subject requests the resource again.
7. SP checks security context to see if user is authorized to access resource.
   If yes, responds with the resource.

It is important to note that this process is stateless, hence the `RelayState` query parameter must be used to keep track of information we want to persist.

### IdP-Initiated

1. IdP prompts users for credentials.
2. User selects service from IdP portal.
3. IdP generates a SAML assertion and puts it in an xhtml document as a hidden form.
   Sign the assertion with private key and redirect with a `POST` to SP.
4. SP verifies the authenticity of the assertion with IdP's public key.
   If valid, SP generates a security context and forwards it to the subject.
5. SP checks security context to see if user is authorized to access resource.
   If yes, responds with the resource.

## What is SCIM?

The System for Cross-domain Identity Management (SCIM) is an open standard for provisioning users and groups across applications.

For example, suppose that we want to provide access to an application for all members of a particular AD group and automatically assign each user to different permission groups based on their position in the company.
Now, say that someone has left the team, and we want to revoke access to their account.

All these identity management tasks are effortless in services that support the SCIM standard.

## The Standard

The SCIM standard defines two things:

- a JSON schema for representing users and groups, and
- a RESTful API to perform CRUD (Create, Read, Update, and Delete) operations on users and groups.

## Example User Lifecycle

Suppose that John joins your company as a software engineer in the sales department.
Your company uses Microsoft Active Directory (AD) as a centralized user store integrated with Okta, which you use for identity management.

An example flow for how Okta may provision John's user in your favorite SaaS might be (disclaimer: I don't actually know exactly what Okta does, but this is my best guess from reading the docs):

1. John's account is created in AD and assigned to the `Sales` and `Developer` AD groups.
2. John's account information is synced to Okta, which uses the `Sales` group to assign him to `SaaS.com` and pushes the `Developer` group to the application.
3. Okta notices that John's account does not exist on `SaaS.com`, so it issues the following `POST` request to `https://SaaS.com/scim/v2/Users`:
    ```json
    {
        "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
        "userName": "DoeJohn@company.com",
        "name": {
            "givenName": "John",
            "familyName": "Doe"
        },
        "emails": [{
            "primary": true,
            "value": "DoeJohn@company.com",
            "type": "work"
        }],
        "displayName": "John Doe",
        "locale": "en-US",
        "externalId": "randomid123",
        "groups": ["Developer"],
        "password": "password123",
        "active": true
    }
    ```
    to which `SaaS.com` responds with a `201 Created` and the newly created user.
4. John gets promoted to a manager and gets added to the `Manager` AD group.
5. Okta updates his user by sending a `PATCH` request to `https://SaaS.com/scim/v2/Users/$theusersuuid`:
    ```json
    {
        "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
        "Operations": [{
            "op": "replace",
            "value": {
                "groups": ["Manager"]
            }
        }]
    }
    ```
    to which `SaaS.com` responds with a `200 OK` and the updated user.
6. John now leaves the company.
7. Okta deactivates his account and sends a `PATCH` request to `https://SaaS.com/scim/v2/Users/$theusersuuid` (note that Okta doesn't use the `DELETE` verb):
    ```json
    {
        "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
        "Operations": [{
            "op": "replace",
            "value": {
                "active": false
            }
        }]
    }
    ```

## Sources

### SAML

- [https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0-cd-02.html](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0-cd-02.html)
- [https://developer.okta.com/docs/concepts/saml/](https://developer.okta.com/docs/concepts/saml/)
- [https://www.samltool.com/generic_sso_res.php](https://www.samltool.com/generic_sso_res.php)

### SCIM

- [https://scim.cloud/](https://scim.cloud/)
- [https://developer.okta.com/docs/concepts/scim/](https://developer.okta.com/docs/concepts/scim/)
- [https://developer.okta.com/docs/reference/scim/scim-20/](https://developer.okta.com/docs/reference/scim/scim-20/)
