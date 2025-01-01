+++
title = 'Solutions to Set Theory and Metric Spaces'
author = 'Ethan Zhang'
description = "My solutions to selected exercises from the first three chapters of Irving Kaplansky's Set Theory and Metric Spaces (i.e. the Set Theory part)"
date = '2024-12-31'
isPost = true
draft = true
+++

## Chapter 1: Basic Set Theory

### 1.3: Partially Ordered Sets and Lattices

<ol>
<li>
Let a symbol $<$ be given for a set $L$.
   Assume that $a < a$ is never true and that $a < b$ and $b < c$ imply $a < c$.
   Define $a \le b$ to mean $a = b$ or $a < b$.
   Prove that $L$ is a partially ordered set relative to $\le$.

{{< proof >}}
Reflexivity and transitivity follow immediately from the definition of $\le$.
To check antisymmetry, let $a, b \in L$ be such that $a \le b$ and $b \le a$.
Suppose for contradiction that $a \ne b$.
Then, $a < b$ and $b < a$, so transitivity of $<$ implies $a < a$ --- a contradiction.
{{< /proof >}}

</li>
<li>
Let $L$ be a partially ordered set in which every subset has a top and bottom element.
   Prove that $L$ is a finite chain.

{{< proof >}}
Take any $a, b \in L$.
Then, the subset $\set{a, b} \subset L$ has a top and bottom element, so $a \le b$ or $b \le a$.
Hence, $L$ is a chain.

We now check that $L$ is finite:
Suppose for contradiction that $L$ is infinite.
Then, we can construct a sequence of elements $(a_i) \in L$, where $a_1$ is the bottom element of $L$, $a_2$ the bottom element of $L \setminus \set{a_1}$, $a_3$ the bottom element of $L \setminus \set{a_1, a_2}$, and so on.
Since $L$ is infinite, this sequence is infinite, implying that the subset $\set{a_1, a_2, a_3, \dots} \subset L$ lacks a top element --- a contradiction.
{{< /proof >}}

</li>
<li value="5">
Let $A$ be a set such that its power set $P(A)$ is a chain (with inclusion as the partial ordering).
What can be said about $A$?

{{< soln >}}
$A$ has at most one element.

Suppose not; then, fix distinct $a, b \in A$ and consider the singleton sets $\set{a}$ and $\set{b}$.
Neither set includes the other, so $P(A)$ cannot be a chain.
{{< /soln >}}

</li>
<li>
Prove that any chain is a distributive lattice.

{{< proof >}}
Let $L$ be said chain.
Then, for any $a, b \in L$, we have $a \le b$ or $b \le a$.
Hence, for any subset $S \subset L$, we can find both a top element and a bottom element (and thus a supremum and infimum).
Thus, $L$ is a lattice.

TODO: show that $L$ is distributive.
{{< /proof >}}

</li>
</ol>
