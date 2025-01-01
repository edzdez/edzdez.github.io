+++
title = 'Solutions to Set Theory and Metric Spaces'
author = 'Ethan Zhang'
description = "My solutions to selected exercises from the first three chapters of Irving Kaplansky's Set Theory and Metric Spaces (the Set Theory part)."
date = '2024-12-31'
isPost = true
draft = false
+++

## Chapter 1: Basic Set Theory

### 1.3: Partially Ordered Sets and Lattices

<ol>
<li>
{{< exercise >}}
Let a symbol $<$ be given for a set $L$.
   Assume that $a < a$ is never true and that $a < b$ and $b < c$ imply $a < c$.
   Define $a \le b$ to mean $a = b$ or $a < b$.
   Prove that $L$ is a partially ordered set relative to $\le$.
{{< /exercise >}}

{{< proof >}}
Reflexivity and transitivity follow immediately from the definition of $\le$.
To check antisymmetry, let $a, b \in L$ be such that $a \le b$ and $b \le a$.
Suppose for contradiction that $a \ne b$.
Then, $a < b$ and $b < a$, so transitivity of $<$ implies $a < a$ --- a contradiction.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $L$ be a partially ordered set in which every subset has a top and bottom element.
Prove that $L$ is a finite chain.
{{< /exercise >}}

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
{{< exercise >}}
Let $A$ be a set such that its power set $P(A)$ is a chain (with inclusion as the partial ordering).
What can be said about $A$?
{{< /exercise >}}

{{< soln >}}
$A$ has at most one element.

Suppose not; then, fix distinct $a, b \in A$ and consider the singleton sets $\set{a}$ and $\set{b}$.
Neither set includes the other, so $P(A)$ cannot be a chain.
{{< /soln >}}

</li>
<li>
{{< exercise >}}
Prove that any chain is a distributive lattice.
{{< /exercise >}}

{{< proof >}}
Let $L$ be said chain.
Then, for any $a, b \in L$, we have $a \le b$ or $b \le a$.
Hence, for any subset $S \subset L$, we can find both a top element and a bottom element (and thus a supremum and infimum).
Thus, $L$ is a lattice.
Exhaustive enumeration of cases reveals that $L$ is distributive, too.
{{< /proof >}}

</li>
<li value="9">
{{< exercise >}}
Let $L$ be a distributive lattice with a top element and a bottom element.
Prove: If an element of $L$ has a complement, the complement is unique.
{{< /exercise >}}

{{< proof >}}
Fix $a \in L$ and let $b, c \in L$ be complements.
Then, $a \wedge b = 0$, $a \vee b = 1$, $a \wedge c = 0$, and $a \vee c = 1$.
By the distributive law, $b = b \wedge (a \vee c) = (b \wedge a) \vee (b \wedge c) = 0 \vee (b \wedge c) = b \wedge c$.
Similarly, $c = c \wedge (a \vee b) = c \wedge b$, so $b = b \wedge c = c$.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $L$ be a partially ordered set in which every subset has a least upper bound.
Suppose that $L$ has a bottom element.
Prove that $L$ is a complete lattice (i.e. every subset has a greatest lower bound).
{{< /exercise >}}

{{< proof >}}
Let $S \subset L$ and consider the set $\mathcal{L}$ of lower bounds of $S$.
Since $L$ has a bottom element (say $\bot$), we have $\bot \in \mathcal{L}$ (i.e. $\mathcal{L}$ is non-empty).
Then, by assumption, $\mathcal{L}$ has a supremum $b$, which we hope to show is an infimum of $S$.

First, note that by virtue of being a supremum, we have $x \le b$ for all $x \in \mathcal{L}$.
Moreover, $b$ must be itself a lower bound of $S$:
Suppose not; then, there is some $s \in S$ such that $b \not \le s$, i.e. $b > s$.
But $s \ge x$ for all $x \in \mathcal{L}$, so $s$ is an upper bound of $\mathcal{L}$ less than the least upper bound of $\mathcal{L}$ --- an absurdity!
Hence, $S$ has an infimum (in particular, $b$), and $L$ is thus complete.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $L$ be a lattice in which every subset with an upper bound has a least upper bound.
Prove that any subset of $L$ with a lower bound has a greatest lower bound.
{{< /exercise >}}

{{< proof >}}
Let $S \subset L$ be a subset with a lower bound, i.e. the set $\mathcal{L}$ of lower bounds of $S$ is not empty.
Then, by the same argument as in the previous exercise, $S$ must have an infimum as well.
Thus, $L$ is conditionally complete.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Call a subset $S$ of a chain $L$ a *lower segment* if it has the following property:
If $x \in S$ and $a < x$, then $a \in S$.
Prove the equivalence of the following two statements:
(a) $L$ is conditionally complete,
(b) For any lower segment $S$ of $L$ other than $L$ and $\emptyset$, there exists an element $u$ such that $S$ is either the set of all $x$ with $x \le u$, or the set of all $x$ with $x < u$.
{{< /exercise >}}

{{< proof >}}
Let $S$ be a lower segment of $L$ other than $L$ and $\emptyset$.
$L$ is a chain, so $S$ must have an upper bound $u \in L$.
Thus, since $L$ is also conditionally complete, $S$ has a supremum --- say $u$.
There are two cases:
If $u \in S$, then $u$ is the top element of $S$.
Hence, every $S = \set{x \in L \mid x \le u}$ (by virtue of being a lower segment).
Otherwise, $u \not \in S$.
However, since $u$ is the least upper bound of $S$, every $x < u$ must belong to $S$.
Hence, this case is also trivial.

Every step of this proof is reversible.
Thus, to prove the converse, it suffices to just repeat the same argument backwards.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Call a subset $S$ of a chain *convex* if it has the following property:
If $a, b \in S$ and $a < x < b$, then $x \in S$.
Prove that a convex subset of a chain $L$ is the intersection of a lower segment of $L$ and an upper segment of $L$.
{{< /exercise >}}

{{< proof >}}
Let $S$ be a convex subset of $L$ and construct for each $s \in S$ the upper segment $\mathcal{U}_s = \set{x \in L \mid x \ge s}$ and $\mathcal{L}_s = \set{x \in L \mid x \le s}$.
Then, define

\\[
\mathcal{U} = \bigcup_{s \in S} \mathcal{U}\_s \qquad \text{and} \qquad \mathcal{L} = \bigcup_{s \in S} \mathcal{L}\_s
\\]

It's evident that $\mathcal{U}$ and $\mathcal{L}$ are upper and lower segments, respectively, and showing that $S = \mathcal{U} \cap \mathcal{L}$ is routine.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Prove that an infinite partially ordered set contains either an infinite chain or an infinite totally unordered subset.
{{< /exercise >}}

{{< proof >}}
Let $A$ be the given the poset.

We attempt to use Zorn's lemma to construct a maximal chain:
Let $L$ be the set of all chains of $A$ ordered by set-theoretic inclusion.
Then, every chain in $L$ evidently has an upper bound $C$: just take $C$ to be the union of all the constituents of the chain.
So, for $x, y \in C$, we have $x \in C_i$ and $y \in C_j$ for some $i \ge j$.
But since $L$ is ordered by inclusion, we must also have $y \in C_i$, implying that $x$ and $y$ are comparable (otherwise, $C_i$ would not be a chain!).
Hence, $C$ is itself a chain, so we conclude by Zorn's lemma that $L$ has a maximal chain $K$.

If $K$ is infinite, then we're done.
Otherwise, every chain in $A$ is finite (to have otherwise would contradict maximality of $K$).
Thus, since $A$ is infinite, there must be an infinite number of chains in $A$.
We can then proceed to pick at most one element from each chain incomparable with the other choices, thereby constructing an infinite antichain. (see the next exercise for details as to how to construct such an antichain.)
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $L$ be a partially ordered set in which the maximum length of a subchain is $n$ ($n$ finite).
Prove that $L$ is the union of $n$ totally unordered subsets and that $n$ is the smallest integer with this property.
{{< /exercise >}}

{{< proof >}}
By assumption, every chain in $L$ has length $\le n$.
We then each element by its rank in $L$; that is, if $x$ is the $i_j$th element of a chain $C_j$, we take the rank of $x$ to be $\max \set{i_j}$.
Say $x \sim y$ if and only if the rank of $x$ is equal to the rank of $y$.
Then, we've partitioned $L$ into $n$ distinct subsets, each of which we shall now argue is an antichain.
Suppose not; that is, say $x, y$ both have rank $i$ and, without loss of generality, $x \le y$.
Say that $x$ is the $i$th element on the chain $C = \set{c_1, \dots, x}$.
Then, $y$ is the $i + 1$th element on the chain $C' = \set{c_1, \dots, x, y}$, contradicting the assumption that $y$ has rank $i$.
Hence, $x \not \le y$.

Moreover, suppose for contradiction that we could form such a partition with $k < n$ subsets.
Take the longest chain $C = \set{c_1, \dots, c_n}$.
By the pigeonhole principle, at least two elements of $C$ must go into the same partition, contradicting the assumption that each partition is an antichain.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $L$ be a finite partially ordered set in which the maximum size of a totally unordered subset is $n$.
Prove that $L$ can be expressed as a union of $n$ subchains.
{{< /exercise >}}

{{< proof >}}
This exercise is very similar to the previous one, only involving a bit more bookkeeping as to which chain to assign each element.
Since $L$ is finite, we can enumerate each element $x_1, x_2, \dots, x_n$.
We then proceed by constructing a partial order $\preceq$ on $L$ where $x_i \preceq x_j$ if and only if $x_i = x_j$ or $x_i \not \le x_j$, $x_j \not \le x_i$, and $i < j$.
Then, the problem reduces to the previous exercise.
{{< /proof >}}

</li>
</ol>

### 1.4: Functions

<ol>
<li value="3">
{{< exercise >}}
Prove that a function $f : A \to B$ is one-to-one and onto if and only if there exists $g : B \to A$ with $gf = i_A$ and $fg = i_B$.
{{< /exercise >}}

{{< proof >}}
Suppose that $f : A \to B$ is a bijection.
Then, there exists an inverse $f^{-1} : B \to A$ that satisfies the required condition.

Suppose that we have a $g : B \to A$ such that $gf = i_A$ and $fg = i_B$.
Let $b \in B$.
Then, $f(g(b)) = b$ by assumption, so $f$ is surjective.
Let $a, a' \in B$ and suppose that $f(a) = f(a')$.
Then, $g(f(a)) = a = a' = g(f(a'))$, so $f$ is injective.
Hence, $f$ is a bijection.
{{< /proof >}}

</li>
<li value="7">
{{< exercise >}}
Given a function $f : A \to A$, we write $f^n$ for the function on $A$ obtained by taking the composite of $f$ with itself $n$ times.
Suppose that $f^n$ equals the identity function for some $n$ (one then says that $f$ is *periodic*).
Prove that $f$ is one-to-one and onto.
{{< /exercise >}}

{{< proof >}}
Fix $n$ such that $f^n = i_A$.
Then, for $a \in A$, $f^n(a) = f(f^{n - 1}(a))$, so $f$ is surjective.
Similarly, if $a, b \in A$ with $f(a) = f(b)$, then $f^{n - 1}(f(a)) = f^n(a) = a = b = f^n(b) = f^{n - 1}(b)$, so $f$ is injective.
Hence, $f$ is bijective.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
As a generalization of periodic functions (see the preceding exercise) we say that $f : A \to A$ is *locally periodic* if for every $x \in A$ there exists an integer $n(x)$, depending on $x$, such that $f^{n(x)}(x) = x$.
Prove that a locally periodic function is one-to-one and onto.
{{< /exercise >}}

{{< proof >}}
Let $a \in A$.
Then, $f^{n(a)}(a) = f^{n(a) - 1}(f(a)) = a$, so $f$ is surjective.
I'm not sure how to show injectivity. :)
{{< /proof >}}

</li>
<li value="15">
{{< exercise >}}
(Knaster-Tarski Fixed Point Theorem).
Let $L$ be a complete lattice, and let $f : L \to L$ be a function for which $a \le b$ implies $f(a) \le f(b)$.
Prove that $f$ leaves some element of $L$ fixed.
{{< /exercise >}}

{{< proof >}}
Consider the set $X = \set{x \in L \mid x \le f(x)}$.
Since $L$ is complete, we know that $L$ has a bottom element, and that furthermore, it belongs to $X$.
Hence, $X$ must have a least upper bound $\alpha$.

Consider $f(\alpha)$ and $x \in X$.
Since $x \le \alpha$, we must have $x \le f(x) \le f(\alpha)$.
Hence, $f(\alpha)$ is an upper bound on $X$.
But since $\alpha$ is the least upper bound, we have $\alpha \le f(\alpha)$, which implies that $f(\alpha) \le f(f(\alpha))$.
Hence, $f(\alpha) \in X$, so $f(\alpha) \le \alpha$.
Therefore, $f(\alpha) = \alpha$.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Prove that an infinite chain contains either a chain order-isomorphic to the positive integers or a chain order-isomorphic to the negative integers.
{{< /exercise >}}

{{< proof >}}
Let $L$ be the chain in question.
While $L$ has both a top and a bottom element, remove them both from the set.
Then, since $L$ is infinite, we'll eventually end up with a set $L$ that is either unbounded from above or unbounded from below (not really rigorous, I know).
In the former case, we can then choose a countably infinite increasing subset $S \subset L$ starting from an arbitrary $x_1$; $S$ is clearly order-isomorphic to the positive integers.
Similarly, in the latter case, we choose a countably infinite decreasing subset $S \subset L$ starting from an arbitrary $x_{-1}$; $S$ is then order-isomorphic to the negative integers.
{{< /proof >}}

</li>
</ol>

### 1.5: Relations

<ol>
<li value="3">
{{< exercise >}}
Let $\sim$ be an equivalence relation on $A$.
For $a \in A$ define $S_a$ to be the set of all $b$ in $A$ with $a \sim b$.
Prove that two $S_a$'s are either disjoint or identical.
Prove that the distinct $S_a$'s form a partition of $A$ (they are called the *equivalence classes* of the relation).
{{< /exercise >}}

{{< proof >}}
Let $a, b \in A$ and consider $S_a$ and $S_b$.
If $c \in S_a$ and $c \in S_b$, then $a \sim c$ and $b \sim c$.
Hence, by transitivity and symmetry, $a \sim b$ and $b \sim a$, so a routine argument gives $S_a = S_b$.
Thus, either $S_a = S_b$ or $S_a \cap S_b = \emptyset$.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
On a set $A$ let $\le$ be a relation which is a partial ordering except that antisymmetry is not assumed (we say $\le$ is a *preorder*).
Define $a \sim b$ to mean that $a \le b$ and $b \le a$ both hold.
Prove that $\sim$ is an equivalence relation.
Define a natural partial ordering on the equivalence classes.
{{< /exercise >}}

{{< proof >}}
Reflexivity and symmetry of $\sim$ follow immediately from definitions.
Let $a \sim b$ and $b \sim c$.
Then, $a \le b$, $b \le a$, $b \le c$, and $c \le b$.
Hence, by transitivity of $\le$, $a \le c$ and $c \le a$, so $a \sim c$.
Thus, $\sim$ is transitive as well, implying that $\sim$ is an equivalence relation.

A natural partial ordering on equivalence classes, then, would be to define $[a] \preceq [b]$ if and only if $a \le b$ and $a \not \le b$ for some choice of representatives $a \in [a], b \in [b]$.
By exhaustive checking of cases, one can easily verify that $\preceq$ is well-defined, no matter the choice of witnesses $a \in [a]$, $b \in [b]$.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $f$ be a map of a set $A$ into itself.
Call a subset $B$ of $A$ *invariant* if $f(B) \subset B$.
(More carefully, we ought to say invariant relative to $f$.)
Call an invariant set *indecomposable* if it cannot be expressed as a union of disjoint nonvoid invariant sets.
Prove that $A$ has a unique expression as a disjoint union of indecomposable invariant sets.
{{< /exercise >}}

{{< proof >}}
Define $\sim$ on $A$ by $a \sim b$ if and only if $f^n(a) = f^n(b)$ for some $n \ge 0$.
Then, we claim that $\sim$ is an equivalence relation:
Reflexivity and symmetry follow immediately.
Transitivity does as well by taking $n = \max{n(a), n(b)}$.

We thus consider the equivalence classes of $\sim$.
Recall that these equivalence classes form a partition of $A$;
that is, they split $A$ up into a family of nonvoid disjoint subsets of $A$ such that their union is $A$.
We now seek to show that each class $[a]$ is $f$-invariant and indecomposable.

Let $a \in [a] = \set{x \in A \mid x \sim a}$.
Then, $f^{n + 1}(a) = f^n(f(a))$, so $f(a) \in [a]$ implying that $f([a]) \subset [a]$.
Hence, $[a]$ is $f$-invariant.

Now, suppose for contradiction that $[a]$ is not indecomposable; that is, we can write $[a]$ as a union of disjoint nonvoid $f$-invariant sets.
Let these sets be $X$ and $Y$.
Then, $f(X) \subset X$ and $f(Y) \subset Y$, implying that there is no $x \in X$ such that $f(x) \in Y$ (and vice versa for $y \in Y$).
But recall that $X, Y \subset [a]$, so $x, y \in [a]$, implying that $f^n(x) = f^n(y)$ for some $n \ge 0$.
Thus, one of either $x$ or $y$ must cross into the other subset, contradicting our assumption.

Finally, we argue that this decomposition is unique:
note that each equivalence class $[a]$ is the minimum $f$-invariant set containing $a$ (as shown in the argument above).
Hence, if we were to have a different indecomposable decomposition, each equivalence class $[a]$ must be a subset of some subset in the new decomposition,
implying that said subset can be further decomposed --- a contradiction.
{{< /proof >}}

</li>
</ol>
