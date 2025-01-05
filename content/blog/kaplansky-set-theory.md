+++
title = 'Solutions to Set Theory and Metric Spaces (Pt. 1)'
author = 'Ethan Zhang'
description = "My solutions to selected exercises from the first three chapters of Irving Kaplansky's Set Theory and Metric Spaces (Set Theory)."
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

First, note that by the definition of supremum, we have $x \le b$ for all $x \in \mathcal{L}$.
Moreover, $b$ must be itself a lower bound of $S$:
Suppose not; then, there is some $s \in S$ such that $b \not \le s$, i.e. $b > s$.
But, $s \ge x$ for all $x \in \mathcal{L}$, so $s$ is an upper bound of $\mathcal{L}$ less than the least upper bound of $\mathcal{L}$ --- an absurdity!
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
Let $A$ be the given poset.

We attempt to use Zorn's lemma to find a maximal chain:
Let $L$ be the set of all chains of $A$ ordered by set-theoretic inclusion.
Then, every chain in $L$ evidently has an upper bound $C$: just take $C$ to be the union of all the constituents of the chain.
So, for $x, y \in C$, we have $x \in C_i$ and $y \in C_j$ for some $i \ge j$.
But, since $L$ is ordered by inclusion, we must also have $y \in C_i$, implying that $x$ and $y$ are comparable (otherwise, $C_i$ would not be a chain!).
Hence, $C$ is itself a chain, so we conclude by Zorn's lemma that $L$ has a maximal chain $K$.

If $K$ is infinite, then we're done.
Otherwise, every chain in $A$ is finite (to have otherwise would contradict maximality of $K$).
Thus, since $A$ is infinite, there must be an infinite number of chains in $A$.
We can then proceed to pick at most one element from each chain incomparable with the other choices, thereby constructing an infinite antichain.
(see the next exercise for details as to how to construct such an antichain.)
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $L$ be a partially ordered set in which the maximum length of a subchain is $n$ ($n$ finite).
Prove that $L$ is the union of $n$ totally unordered subsets and that $n$ is the smallest integer with this property.
{{< /exercise >}}

{{< proof >}}
By assumption, every chain in $L$ has length $\le n$.
We then label each element by its rank in $L$; that is, if $x$ is the $i_j$th element of a chain $C_j$, we take the rank of $x$ to be $\max \set{i_j}$.
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
Since $L$ is complete, we know that $L$ has a bottom element, and that, furthermore, it belongs to $X$.
Hence, $X$ must have a least upper bound $\alpha$.

Consider $f(\alpha)$ and $x \in X$.
Since $x \le \alpha$, we must have $x \le f(x) \le f(\alpha)$.
Hence, $f(\alpha)$ is an upper bound on $X$.
But, since $\alpha$ is the least upper bound, we have $\alpha \le f(\alpha)$, which implies that $f(\alpha) \le f(f(\alpha))$.
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
Showing that $\preceq$ is well-defined is routine.
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
But, recall that $X, Y \subset [a]$, so $x, y \in [a]$, implying that $f^n(x) = f^n(y)$ for some $n \ge 0$.
Thus, one of either $x$ or $y$ must cross into the other subset, contradicting our assumption.

Finally, we argue that this decomposition is unique:
note that each equivalence class $[a]$ is the minimum $f$-invariant set containing $a$ (as shown in the argument above).
Hence, if we were to have a different indecomposable decomposition, each equivalence class $[a]$ must be a subset of some subset in the new decomposition,
implying that said subset can be further decomposed --- a contradiction.
{{< /proof >}}

</li>
</ol>

## Chapter 2: Cardinal Numbers

### 2.1: Countable Sets

<ol>
<li>
{{< exercise >}}
Let $A$ be a countable set and suppose that there is given a function mapping $A$ onto a set $B$. Prove that $B$ is countable.
{{< /exercise >}}

{{< proof >}}
Consider the set of pre-images $f^{-1}(b)$ for all $b \in B$.
Since $f$ is surjective, each of these sets must be non-empty.
Hence, we can choose an arbitrary representative $a_b$ from each, so that the map $a_b \mapsto b$ is a one-to-one correspondence between a subset of $A$ and $B$.
Thus, $B$ is countable.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Prove that the Cartesian product of two countable sets is countable.
Generalize to the Cartesian product of a finite number of sets.
{{< /exercise >}}

{{< proof >}}
Let $A, B$ be countable and consider $A \times B$.
For $b \in B$, denote $P_b = \set{(a, b) \mid a \in A}$.
Then, $A \times B$ is the countable union of $P_b$'s ranging over $b \in B$, so it suffices to show that each $P_b$ is itself countable.

Fix $b \in B$.
Then, we have a one-to-one correspondence $a \mapsto (a, b)$ between $A$ and $P_b$.
Since $A$ is countable, we conclude $P_b$ is too, implying that $A \times B$ is countable as well.

We extend this result to the finite Cartesian product by induction on $n$, the number of sets involved.
When $n = 2$, the claim holds by the above argument.

Let $n > 2$ and assume that the claim holds for all $n' < n$.
Then, we can rewrite $A_1 \times \cdots \times A_n$ as the Cartesian product of two sets: $A_1 \times (A_2 \times \cdots \times A_n)$.
By assumption, the left-hand side is countable; further, the inductive hypothesis implies that the right-hand side is too.
Hence, their Cartesian product is itself countable as well.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Prove that the set of all finite subsets of a countable set is countable.
{{< /exercise >}}

{{< proof >}}
Let $A$ be countable and, for positive integers $n$, define $A_n$ to be the set of all subsets of $A$ with size at most $n$.
Then, the set of finite subsets of $A$ is the countable union of $A_n$'s ranging over $n \in \mathbb{N}$, so it suffices to show that each $A_n$ is countable.

Fix $n \in \mathbb{N}$ and consider $P = A^n$ (i.e. take the Cartesian product of $A$ with itself $n$ times).
By exercise 2, $P$ is countable.
Moreover, we have a surjective mapping $(a_1, \dots, a_n) \mapsto \set{a_1, \dots, a_n}$ between $P$ and $A_n$.
Hence, we conclude by exercise 1 that $A_n$ is itself countable, and thus, so is the set of all finite subsets of $A$.
{{< /proof >}}

</li>
<li value="5">
{{< exercise >}}
<ol type="a">
<li>
A subset $M$ of a partially ordered set $L$ is said to be *cofinal* in $L$ for any $x \in L$ there exists $y \in M$ with $x \le y$.
Prove that any countable lattice has a cofinal chain.
</li>
<li>
Let $A$ be an uncountable set, and let $L$ be the partially ordered set consisting of all finite subsets of $A$ (the ordering on $L$ is set-theoretic inclusion).
Prove that $L$ does not have a cofinal chain.
</li>
</ol>
{{< /exercise >}}

{{< proof >}}

<ol type="a">
<li>
Let $L$ be a countable lattice.
Then, we can enumerate its elements $a_1, a_2, \dots$ and construct a sequence $(b_i)$,
where $b_1 = \bigvee \set{a_1}$, $b_2 = \bigvee \set{a_1, a_2}$, $b_3 = \bigvee \set{a_1, a_2, a_3}$, and so on.

Consider the set of all $b_i$'s.
This set is indeed cofinal:
Consider an arbitrary $a_i \in L$.
By the definition of a join, we have $b_i \ge a_j$ for $a_j \in \set{a_1, \dots, a_i}$.
Hence, $b_i \ge a_i$.

Moreover, this set forms a chain:
Consider $b_i, b_j$ with $i < j$.
By definition, we have $b_i = \bigvee \set{a_1, \dots, a_i}$ and $b_j = \bigvee \set{a_1, \dots, a_j} = \bigvee \set{a_1, \dots, a_i} \vee \bigvee \set{a_{i + 1}, \dots, a_j} = b_i \vee \bigvee \set{a_{i + 1}, \dots, a_j}$.
Hence, by the definition of a join, $b_j \ge b_i$.

</li>
<li>
Suppose for contradiction that $L$ has a cofinal chain $C$;
that is, for every $X \in L$, we have $Y \in C$ such that $X \le Y$ (i.e. $X \subset Y$).

For each natural $n$, note that we can have at most one set $K \in C$ with cardinality $n$:
Suppose not; that is, let $K, K'$ be distinct sets with the same cardinality.
Then, there must be at least one element in $K$ that is not in $K'$, and vice versa, implying that neither $K \le K'$ nor $K' \le K$ --- a contradiction with the assumption that $C$ is a chain.

Moreover, we have an injection $f : C \to \mathbb{Z}_{\ge 0}$ given by $K \mapsto |K|$, implying that $C$ is countable.
Thus, the union of all sets in $C$ is countable (recall that the countable union of countable sets is countable).
But, since $C$ is cofinal, every singleton set $\set{a} \subset L$ must be $\le$ (included in) some set $K \in C$, so $A \subset \bigcup C$.
This result, however, implies that $A$ is countable --- a contradiction.

</li>
</ol>
{{< /proof >}}

</li>
<li>
{{< exercise >}}
A chain $C$ is said to be dense-in-itself if the following holds:
For any $a, b$ in $C$ with $a < b$, there exists $x \in C$ with $a < x < b$.
Let $A$ and $B$ be countable chains, each of which is dense-in-itself and, furthermore, does not have a top or bottom element.
Prove that $A$ and $B$ are order-isomorphic.
{{< /exercise >}}

{{< proof >}}
First, note that $A$ and $B$ are both countably infinite.
Hence, we begin by enumerating their elements.

We then construct the following map $f : A \to B$:
Let $f(a_1) = b_1$.
Then, consider $b_2$ and find the first $a_i$ (that isn't $a_1$) satisfying the same order with $a_1$ as $b_1$ and $b_2$ (this step is OK since $A$ has neither a top nor a boteom element).
Set $f(a_i) = b_2$ and find the first $a_j$ not assigned.
If $a_1 < a_j < a_i$ (or the other way around), then find the first unassigned $b_j$ with the same relative ordering (this step is fine since $B$ is dense-in-itself).
Otherwise, the lack of a top or a bottom element allows us to still choose a $b_j$ with the same relative ordering.
Set $f(a_j) = b_j$.
This process can thus be repeated, alternating between drawing an element of $A$ and an element of $B$ to complete the construction of $f$.

It's evident that $f$ must cover all values $a_i \in A$ (so $f$ is a map) and $b_j \in B$ (so $f$ is surjective).
Moreover, since we only ever assign elements that were previously unassigned, $f$ is injective and thus, an isomorphism.
Finally, it's clear by construction that $f$ respects the ordering of elements, so we conclude that $f$ is an order-isomorphism between $A$ and $B$.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $A$ be a countable chain which is dense-in-itself.
Prove that, up to order-isomorphism, there are exactly four possibilities for $A$.
{{< /exercise >}}

{{< proof >}}
The cases are as follows:

1. $A$ has neither a top nor a bottom element:
   We've shown in exercise 6 that all such chains are order-isomorphic.
2. $A$ has both a top and a bottom element:
   Suppose $B$ also has a top and a bottom element.
   Then, $A' = A \setminus \set{\top_A, \bot_A}$ and $B' = B \setminus \set{\top_B, \bot_B}$ are both dense, countable chains with no top or bottom element (case 1).
   Hence, we consider the order isomorphism $f : A' \to B'$ and extend it to $A$ and $B$ by mapping $\top_A \mapsto \top_B$ and $\bot_A \mapsto \bot_B$.
3. $A$ has a top element but no bottom element:
   We use a similar trick as in the previous case.
   For any $B$ of the same class, we take the order-isomorphism $f : A \setminus \set{\top_A} \to B \setminus \set{\top_B}$ and extend it with $\top_A \mapsto \top_B$.
4. $A$ has a bottom element but no top element:
   This case is analogous to the preceding case.
   {{< /proof >}}

</li>
<li>
{{< exercise >}}
Any countable chain is order-isomorphic to a chain of rational numbers.
{{< /exercise >}}

{{< proof >}}
Let $L$ be the given chain.
If $L$ is not dense, then we can enumerate the elements of $L$ _in order_ by $a_1, a_2, \dots$.
It suffices, then, to map each $a_i \mapsto i$.

Otherwise, $L$ is dense-in-itself and falls into one of the four classes defined in the previous exercise.
One merely needs to find a corresponding subset of $\mathbb{Q}$ in the same class as $L$.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $L$ be a conditionally complete dense-in-itself chain.
Prove that $L$ is uncountable.
{{< /exercise >}}

{{< proof >}}
Suppose not; that is, take $L$ to be countable.
Then, we can fix an enumeration of $L$ and an arbitrary element $x_1$ (which we can assume to not be maximal).
Let $y_1$, then, be the first element in the enumeration with $y_1 > x_1$, $x_2$ the first subsequent element with $x_1 < x_2 < y_1$,
$y_2$ the first subsequent element with $x_2 < y_2 < y_1$, and so on.
In this way, an ascending sequence of $x_i$'s and a descending sequence of $y_i$'s are constructed, which we illustrate as
\\[
x_1 < x_2 < \dots < x_n < \dots < y_n < \dots < y_2 < y_1
\\]
Since the $x$'s are bounded above and $L$ is conditionally complete, they have a supremum $z$.
But, $z$ cannot ever appear in this sequence, for if it did, then we could find either an upper bound $y_j < z$ or an $x_j > z$; in both cases, a contradiction.
Thus, $L$ cannot be countable.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $A$ be an infinite set, $B$ a finite subset of $A$, and $C$ the complement of $B$ in $A$.
Prove that there exists a one-to-one correspondence between $A$ and $C$.
{{< /exercise >}}

{{< proof >}}
We use the trick of the Hilbert Hotel:
Choose a countably infinite subset $D \subset A$ such that $B \subset D$.
Then, we can enumerate the element of $D$ as $b_1, b_2, \dots, b_n, d_1, d_2, \dots$, where each $b_i \in B$ and $d_j \in D \setminus B$.
We then construct a map $f : D \to D \setminus B$ given by $f(b_i) = d_i$ and $f(d_j) = d_{j + n}$.
That $f$ is a bijection is immediate.

Moreover, note that $A = D \cup D'$ and $C = D' \cup D \setminus B$.
Hence, the map $g : A \to C$, given by
\\[
g(x) = \begin{cases}
f(x) & \text{if }x \in D \cr
x & \text{if }x \in D'
\end{cases}
\\]
is a bijection from $A$ to $C$.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $A$ be an uncountable set, $B$ a countable subset of $A$, and $C$ the complement of $B$ in $A$.
Prove that there exists a one-to-one correspondence betwwen $A$ and $C$.
{{< /exercise >}}

{{< proof >}}
If $B$ is finite, then we're done by the previous exercise.
Hence, we assume from now on that $B$ is infinite.

We once again apply the trick of the Hilbert Hotel:
Choose a countably infinite subset $D \subset A$ such that $B \subset D$.
Then, enumerate the elements of $D$ as $b_1, d_1, b_2, d_2, \dots$ where each $b_i \in B$ and $d_j \in D \setminus B$.
The map $f : D \to D \setminus B$ constructed by mapping $b_1 \mapsto d_{2i - 1}$ and $d_j \mapsto d_{2j}$ is evidently a bijection.

Thus, the map $g : A \to C$, given by
\\[
g(x) = \begin{cases}
f(x) & \text{if }x \in D \cr
x & \text{if }x \in D'
\end{cases}
\\]
is a bijection from $A$ to $C$.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $L$ be the partially ordered set of all subsets of a countably infinite set (ordered by inclusion).
Prove that $L$ contains a chain order-isomorphic to the chain of all real numbers.
{{< /exercise >}}

{{< proof >}}
This exercise _seems_ to be essentially the construction of the reals via Dedekind cuts.
Perhaps I'll come back to fill this part out after I take real analysis.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $A$ be a countably infinite set.
Show that $A$ contains continuum many subsets (i.e., a collection of subsets in one-to-one correspondence with the real numbers) such that any two have a finite intersection.
{{< /exercise >}}

{{< proof >}}
I think this exercise is to construct the reals via Cauchy sequences.
Hence, we leave the same remark as in the preceding exercise.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $L$ be a partially ordered set in which every countable chain has an upper bound.
Let $S$ be a countable subset with the following property:
For any $a$ and $b$ in $S$ there exists $c$ in $S$ with $a \le c$, $b \le c$.
Prove that $S$ has an upper bound in $L$.
{{< /exercise >}}

{{< proof >}}
Let $S$ be the given subset.
We attempt to use Zorn's lemma to find a maximal chain in $S$.
Let $C$ be the set of all chains in $S$, ordered by inclusion.
Then, every chain $K \in C$ evidently has an upper bound: just take the set-theoretic union of all elements in the chain.
That this union is itself a chain in $S$ is a routine argument (by contradiction).
Hence, Zorn's lemma implies that $S$ has a maximal chain $K$.

By assumption, $K$ has an upper bound $u$.
It remains to show that $u$ is, in fact, an upper bound on $S$ as well.
Assume for contradiction that it is not; that is, that we have some $s \in S$ with $s \not \le u$.
Then, we can fix an arbitrary element $k \in K$ and find an $x \in S$ with $x \ge k$, $x \ge s$.
Hence, $K \cup \set{x}$ is a chain in $S$, contradicting the maximality of $K$.
Thus, $u$ must be an upper bound on $S$.

{{< /proof >}}

</li>
</ol>

### 2.2: Cardinal Numbers

1. {{< exercise >}}
   Prove that the set of positive real numbers has cardinal number $c$.
   {{< /exercise >}}
   {{< proof >}}
   Consider the bijection $f : \mathbb{R} \to \mathbb{R}^+$ given by $f(x) = e^x$.
   Hence, $o(\mathbb{R}^+) = o(\mathbb{R}) = c$.
   {{< /proof >}}

2. {{< exercise >}}
   Prove that the open unit interval (the set of all real $x$ with $0 < x <1$) has cardinal number $c$.
   {{< /exercise >}}
   {{< proof >}}
   Consider the bijection $g : \mathbb{R}^+ \to (0, 1)$ given by $g(x) = \frac{x}{1 + x}$.
   Since the composition of bijections is itself a bijection, we have a bijection $g \circ f : \mathbb{R} \to (0, 1)$, so $o(\mathbb{R}) = o((0 ,1)) = c$.
   {{< /proof >}}

3. {{< exercise >}}
   What is the cardinal number of the closed unit interval (all $x$ with $0 \le x \le 1$)?
   Of the half open interval (all $x$ with $0 \le x < 1$)?
   {{< /exercise >}}
   {{< proof >}}
   For both intervals, there is a trivial injection from the interval to $\mathbb{R}$ (namely, the identity).
   Furthermore, there's also an injection the other way (namely, the bijection in exercise 2 with an extended codomain).
   Hence, by Schroeder-Bernstein, there is a bijection between each interval and $\mathbb{R}$, so $o((0, 1)) = o([0, 1)) = o(\mathbb{R}) =  c$.
   {{< /proof >}}

4. {{< exercise >}}
   Extend exercise 2 and 3 to the interval from $a$ to $b$, where $a$ and $b$ are real numbers with $a < b$.
   {{< /exercise >}}
   {{< proof >}}
   Consider the bijection $h : (0, 1) to (a, b)$ given by $h(x) = (b - a)x + a$.
   Hence, $h \circ g \circ f : \mathbb{R} \to (a, b)$ is a bijection, so $o((a, b)) = o(\mathbb{R}) = c$.
   {{< /proof >}}

5. {{< exercise >}}
   What is the cardinal number of the set of irrational real numbers?
   Of the set of transcendental real numbers?
   {{< /exercise >}}
   {{< proof >}}
   Using the technique of the Hilbert Hotel, we construct a bijection $f : \mathbb{R} \to \mathbb{R} \setminus \mathbb{Q}$, given by
   \\[
   f(x) = \begin{cases}
   q + (n + 1)\sqrt{2} & \text{if } x = q + n\sqrt{2} \text{ for some } q \in Q, n \in \mathbb{Z} \cr
   x & \text{otherwise}
   \end{cases}
   \\]
   As for the transcendentals, we let $A$ be the set of algebraic numbers.
   Then, we have a bijection $g : \mathbb{R} \to \mathbb{R} \setminus A$, given by
   \\[
   g(x) = \begin{cases}
   e^x & \text{if } x \in A \cr
   e^{a + 1} & \text{if } x = e^{a} \text{ for some } a \in A \cr
   x & \text{otherwise}
   \end{cases}
   \\]
   Hence, both the irrationals and the transcendentals have cardinal number $c$.
   {{< /proof >}}

### 2.3: Comparison of Cardinal Numbers and Zorn's Lemma

<ol>
<li value="2">
{{< exercise >}}
Let $L$ be a lattice in which every chain has an upper bound.
Prove that $L$ has a unique maximal element.
{{< /exercise >}}
{{< proof >}}
By Zorn's lemma, we know that a maximal element exists.
Let $x, y \in L$ be maximal elements of $L$.
Then, consider the subset $\set{x, y}$.
Since $L$ is a lattice, $\set{x, y}$ must have a supremum --- call it $u$.
Then, $u \ge x$ and $u \ge y$.
But, $x$ and $y$ are both maximal, so it cannot be that $u > x$ or $u > y$; hence, we must have $x = u = y$.
{{< /proof >}}
</li>
<li>
{{< exercise >}}
<ol type="a">
<li>
Let functions $f : A \to B$ and $g : B \to A$ be given.
Define a mapping $h : P(A) \to P(A)$ by $h(S) = (g[f(S)'])'$ for $S$ a subset of $A$.
Prove that $S \supset T$ implies $h(S) \supset h(T)$.
</li>
<li>
Use part (a) and Exercise 15 in Section 1.4 (Knaster-Tarski) to give another proof of Theorem 7 (Schroeder-Bernstein).
</li>
</ol>
{{< /exercise >}}
{{< proof >}}
<ol type="a">
<li>
Suppose $S \supset T$.
Then, for each $t \in T$, we have $t \in S$ as well, so $f(S) \supset f(T)$.
Taking the complement gives $f(S)' \subset f(T)'$, so $g[f(S)'] \subset g[f(T)'])$.
Therefore, $(g[f(S)'])' = h(S) \supset h(T) = (g[f(T)'])'$, which is what we set out to show.
</li>
<li>
Let $f : A \to B$ and $g : B \to A$ be the given injections.
Then, we construct the map $h$ as defined above.
Recall that $P(A)$ forms a lattice ordered by set-theoretic inclusion.

Let $X, Y \in P(A)$ be such that $X \le Y$ (i.e. $X, Y \subset A$ with $X \subset Y$).
Part (a) implies that $h(X) \le h(Y)$, so the Knaster-Tarski fixed point implies that there is some $Z \in P(A)$ that is held fixed by $h$; that is, $h(Z) = (g[f(Z)'])' = Z$.
Hence, $Z' = g[f(Z)']$, so the restrictions $f\mid_{f(Z)} : f(Z) \to Z$ and $g \mid_{f(Z)'} : f(Z)' \to Z'$ are bijections.
Thus, we construct a bijection $\ell : A \to B$, given by
\\[
\ell(x) = \begin{cases}
f(x) & \text{if } x \in Z \cr
(g\mid_{f(Z)'})^{-1}(x) & \text{if } x \in Z'
\end{cases},
\\]
and thereby proving the theorem.

</li>
</ol>
{{< /proof >}}
</li>
<li>
{{< exercise >}}
Prove that any partially ordered set contains a maximal totally unordered subset.
{{< /exercise >}}
{{< proof >}}
Let $A$ be the given partially ordered set.
We construct a partially ordered set $L$ designed to solve our problem.
A typical member $X \in L$ is a totally unordered subset of $A$.
We partially order $L$ by set-theoretic inclusion.
Evidently, every chain in $L$ has an upper bound: just take the set-theoretic union of all the members of the chain.
So, by Zorn's lemma, $L$ has a maximal element, which is what we set out to show.
{{< /proof >}}
</li>
<li>
{{< exercise >}}
Prove that the order on an arbitrary partially ordered set can be strengethed so as to make it a chain.
{{< /exercise >}}
{{< proof >}}
Let $(A, \le)$ be the given partially ordered set.
We construct a new partially ordered set $L$ designed to solve our problem.
A typical member $\le_\alpha \in L$  is a partial order on $A$ (i.e. $\le_\alpha \subset A \times A$) with $\le \subset \le_\alpha$.
We partially order $L$ by taking $\le_\alpha \preceq \le_\beta$ if $\le_\alpha \subset \le_\beta$;
that is, if $x \le_\alpha y$, then $x \le_\beta y$.
It is evident that any chain in $L$ has an upper bound: just take the set-theoretic union of all elements in the chain.
So, by Zorn's lemma, $L$ has a maximal element $\le_0$.

We now seek to show that $\le_0$ is a chain.
Take $a, b \in A$ and suppose for contradiction that $a \not \le b$ and $b \not \le a$.
Then, we can strengthen $\le_0$ to $\le_0'$ by adding either---without loss of generality, we add $a \le b$.
But then, $\le_0 \subset \le_0'$, so $\le_0 \prec \le_0'$, a contradiction with the assumption that $\le_0$ is maximal.
Thus, $\le_0$ is a chain.

{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $L$ be a lattice in which every chain has a least upper bound and a greatest lower bound.
Prove that $L$ is complete.
{{< /exercise >}}
{{< proof >}}
Let $S$ be an arbitrary subset of $L$.
We want to show that $S$ has both a least upper bound and a greatest lower bound.

Consider the set $U = \set{x \in L \mid x \ge s \text{ for all $s \in S$}}$ of upper bounds of $S$.
It's clear that $U$ is non-empty: observe that $L$ satisfies the hypotheses for Zorn's lemma, so $L$ has a maximal element.
Furthermore, every chain in $U$ coincides with a chain in $L$; hence, every chain in $U$ has a greatest lower bound.

Consider the inverse relation $\le'$ on $U$ defined by $x \le' y$ if and only if $y \le x$.
Reflexivity, anti-symmetry, and transitivity follow immediately from definitions; hence, $\le'$ is a partial order on $U$ (and, in fact, $L$).
Moreover, every chain in $U$ under $\le'$ coincides with a chain under $\le$, just with the order reversed.
So, the greatest lower bound of said chain (under $\le$) coincides with a least upper bound (under $\le'$).
We thus apply Zorn's lemma to conclude that $U$ has a maximal element (under $\le'$), or alternatively, a minimal element (under $\le$).
Call this element $x$.

We now set out to show that $x$ is, in fact, the minimum element of $U$.
Let $x, y \in U$ be minimal elements.
Then, the set $\set{x, y}$ has a greatest lower bound $m$, i.e. $m \le x$ and $m \le y$.
By the definition of minimal, $m \not < x$ and $m \not < y$.
Hence, $x = m = y$.

Thus, $x$ is the least upper bound of $S$.
An analogous argument reveals that $S$ has a greatest lower bound as well.
Therefore, we conclude that $L$ is complete.
{{< /proof >}}

</li>
</ol>

### 2.4: Cardinal Addition

1. {{< exercise >}}
(Subtraction of cardinals).
Let $d$ and $e$ be given cardinal numbers.
Prove that the solutions of $d + d_1 = e$ are given as follows:
<ol type="a">
<li>
for $d > e$ there is no solution,
</li>
<li>
for $d = e$ and $d$ infinite, $d_1$ can be any cardinal number $\le d$,
</li>
<li>
for $d < e$ and $e$ infinite, $d_1 = e$ is the unique solutions
</li>
</ol>
   {{< /exercise >}}
   {{< proof >}}
We work in cases:
<ol type="a">
<li>
The result is immediate if $e$ is finite;
hence, we assume that $e$ is infinite.
If $d_1 \ge d$, then $d + d_1 = d_1 \ge d > e$.
Otherwise, if $d \ge d_1$, then $d + d_1 = d > e$.
</li>
<li>
If $d_1 \le d$, we have $d + d_1 = d = e$.
Otherwise, $d + d_1 = d_1 > d = e$.
</li>
<li>
If $d_1 < e$, then $d + d_1 = \max(d, d_1) < e$.
If $d_1 = e$, then $d + d_1 = e$.
If $d_1 > e$, then $d + d_1 = d_1 > e$.
</li>
</ol>
   {{< /proof >}}
2. {{< exercise >}}
   Prove that $c + c = c$, where $c$ is the cardinal number of the continuum, without using Theorem 13 or Theorem 14.
   {{< /exercise >}}
   {{< proof >}}
   Let's take a few representative sets with cardinal number $c$: namely, $\mathbb{R}^+$, $\mathbb{R}^{\le 0}$, and $\mathbb{R}$.
   Note that $\mathbb{R}^+$ and $\mathbb{R}^{\le 0}$ are disjoint.
   Hence, $c + c = o(\mathbb{R}^+ \cup \mathbb{R}^{\le 0}) = o(\mathbb{R}) = c$.
   {{< /proof >}}

### 2.5: Cardinal Multiplication

1. {{< exercise >}}
   Let $\set{A_i}$, $i = 1, 2, \dots,$ be a countably infinite family of infinite sets, all having the same cardinal number $d$.
   Prove that $\bigcup A_i$ has cardinal number $d$.
   {{< /exercise >}}
   {{< proof >}}
   Denote $o(\bigcup A_i) = e$.

   Note that if all the $A_i$'s are disjoint, then $e = o(A_1 \times A_2 \times \dots) = dd \cdots = d$.
   Hence, $e \le d$.
   Moreover, note that since $\bigcup A_i$ is a union of sets with cardinality $d$, $A_1 \subset \bigcup A_i$, so $d \le e$.
   Hence, $e = d$.
   {{< /proof >}}

2. {{< exercise >}}
(Division of cardinals.)
For given cardinal numbers $d$ and $e$, study the solutions of $dd_1 = e$.
{{< /exercise >}}
{{< proof >}}
We work in cases:
<ol type="a">
<li> If $d > e$, then there is no solution:
The result is immediate if $e$ is finite;
hence, we assume that $e$ is infinite.
If $d_1 \ge d$, then $d d_1 = d_1 \ge d > e$.
Otherwise, if $d \ge d_1$, then $d d_1 = d > e$.
</li>
<li> If $d = e$ and $d$ infinite, all $d_1 \le d$ are solutions:
If $d_1 \le d$, we have $d d_1 = d = e$.
Otherwise, $d d_1 = d_1 > d = e$.
</li>
<li> If $d < e$ and $e$ infinite, $d_1 = e$ is the only solution:
If $d_1 < e$, then $d d_1 = \max(d, d_1) < e$.
If $d_1 = e$, then $d d_1 = e$.
If $d_1 > e$, then $d d_1 = d_1 > e$.
</li>
</ol>
   {{< /proof >}}

### 2.6: Cardinal Exponentiation

<ol>
<li>
{{< exercise >}}
   For any cardinal number $d$, prove that $1^d = 1$ and $d^1 = d$.
   {{< /exercise >}}
   {{< proof >}}
   Let $D$ be a set such that $o(D) = d$ and $1 = \set{\*}$.
   There is only one map in $H(D, 1)$: the map that sends all values $d \in D$ to $*$.
   Similarly, there are $d$ maps in $H(1, D)$: for each $x \in D$, the map that sends $\* \mapsto x$.
   {{< /proof >}}
</li>
<li>
{{< exercise >}}
   If $d$ is an infinite cardinal number, and $n$ a finite one, prove that $d^n = d$.
   {{< /exercise >}}
   {{< proof >}}
   We identify $d^n$ by $d$ multiplied with itself $n$ times and proceed by induction on $n$.
   When $n = 1$, $d^n = d$ by exercise 1.

Assume $n > 1$ and that $d^{n - 1} = d$.
Then, $d^n = d^{n - 1} d = dd = d$ by Theorem 15.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Prove (11), i.e. $d^{e_1 + e_2} = d^{e_1} d^{e_2}$.
{{< /exercise >}}
{{< proof >}}
Let $D, E_1, E_2$ be sets with cardinal numbers $d, e_1, e_2$, respectively and suppose that $E_1$ and $E_2$ are disjoint.
Then, the left-hand side of the equation is the cardinal number of $H(E_1 \cup E_2, D)$, and the right-hand side is the cardinal number of $H(E_1, D) \times H(E_2, D)$.

Given $f : E_1 \cup E_2 \to D$, we have that the ordered pair $(f\mid_{E_1}, f\mid_{E_2})$ is an element of $H(E_1, D) \times H(E_2, D)$.
That $f \mapsto (f\mid_{E_1}, f\mid_{E_2})$ is a bijection is routine.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
If $e$ is an infinite cardinal number and $d$ is a cardinal number satisfying $2 \le d \le 2^e$, prove that $d^e = 2^e$.
{{< /exercise >}}
{{< proof >}}
We have $d^e \le (2^e)^e \le 2^{ee} = 2^e$.
Moreover, since $2 \le d$, we have $2^e \le d^e$.
Hence, $2^e = d^e$.
{{< /proof >}}
</li>
<li value="6">
{{< exercise >}}
Let $d_1, e$ be infinite cardinals.
Write $d = 2^{d_1}$ and suppose that $d \ge 2^e$.
Prove that $d^e = d$.
{{< /exercise >}}
{{< proof >}}
Since $d \ge 2^e$, we have $d^e \ge (2^{e})^e = 2^{ee} = 2^{e}$.
That is, $(2^{d_1})^e = 2^{d_1 e} \ge 2^{e}$.
Hence, we conclude that $d_1 \ge e$.
Thus, $2^{d_1 e} = 2^{d_1} = d$, giving $d^e = d$.
{{< /proof >}}
</li>
<li>
{{< exercise >}}
If $f : A \to B$ is a given function, the *graph* of $f$ is the subset of $A \times B$ consisting of all $(a, f(a))$.
<ol type="a">
<li>
Prove that the map $a \mapsto (a, f(a))$ is a one-to-one map of $A$ onto the graph of $f$.
</li>
<li>
Let $D$ and $E$ be sets with cardinal numbers $d$ and $e$.
Suppose that $d$ is infinite and $e \le d$.
Prove that $d^e$ is the number of one-to-one maps of $E$ into $D$.
</li>
</ol>
{{< /exercise >}}
{{< proof >}}
<ol type="a">
<li>
Let $a, b \in A$ where $(a, f(a)) = (b, f(b))$.
Then, $\pi_1 (a, f(a)) = a = b = \pi_1 (b, f(b))$.
Hence, the given map is one-to-one.

Moreover, we argue that this map is surjective:
Let $(a, f(a))$ be a point on the graph of $f$.
Then, evidently, $a \mapsto (a, f(a))$.
So, this map is a one-to-one correspondence.

</li>
<li>
We know that $H(E, D) = d^e$, so $d^e$ is evidently an upper bound.

Let $f : E \to D$ be an arbitrary map.
Recall from (a) that the map $g_f$ of $f$'s graph is an injection from $E$ to $E \times D$.
Furthermore, note that since $d \ge \aleph_0$ and $e \le d$, we have $o(E \times D) = ed = d = o(D)$.
Hence, there exists some bijection from $E \times D$ to $D$, say $h$.
Then, $h \circ g_f$ is an injection from $E$ to $D$, and the map $f \mapsto h \circ g_f$ is thus a map from functions $E$ to $D$ to injections $E$ to $D$.
Note, too, that since a map is uniquely defined by its graph, this map is injective.
Thus, we conclude that the number of injective functions from $E$ to $D$ is at least $o(H(E, D)) = d^e$, thereby implying that the actual count is $d^e$.

</li>
</ol>
{{< /proof >}}
</li>
<li>
{{< exercise >}}
Let $D$ be an infinite set with cardinal number $d$.
Prove that $D$ has $2^d$ subsets of cardinal number $d$.
{{< /exercise >}}
{{< proof >}}
Obviously, $o(P(D)) = 2^d$ is an upper bound.
To exhibit $2^d$ subsets with cardinal number $d$, split $D$ into the union of disjoint subsets $D_1, D_2$, each of which has cardinal number $d$.
Then, every subset $S \subset D$ has cardinal number $\le d$, so the cardinality of $D_1 \cup S \le d + d = d$.
There are $2^d$ such subsets $S$; hence, $2^d$ is a also a lower bound.
Thus, there are $2^d$ total subsets of $D$ with cardinal number $d$.
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $D$ be an infinite set with cardinal number $d$.
Prove that the number of one-to-one maps of $D$ onto itself is $2^d$.
{{< /exercise >}}
{{< proof >}}
The number of maps from $D$ to itself is $d^d = 2^d$ (Exercise 4).
Hence, $2^d$ is an upper bound.
To exhibit $2^d$ bijections between $D$ and itself, we once again split $D$ into the union of disjoint subsets $D_1, D_2$, each of which has cardinal number $d$.
We then consider the Cartesian product of the set of all injections from $D_1$ to $D_2$ and the set of all injections from $D_2$ to $D_1$.
Both factors have cardinal number $d^d = 2^d$ (Exercise 7(b) and Exercise 4).
Hence, the cardinal number of the product is $2^d \times 2^d = 2^{d + d} = 2^d$.
Observe, then, that we can construct an explicit bijection $f$ between $D_1$ and $D_2$, dependent on both members of the pair, via the process detailed in the alternative proof of Schroeder-Bernstein (Section 2.3, Exercise 3(b)).
Finally, we extend this bijection $f$ to a bijection $g : D \to D$ given by
\\[
    g(x) = \begin{cases}
        f(x) & \text{if }x \in D_1 \cr
        f^{-1}(x) & \text{if }x \in D_2 \cr
    \end{cases}.
\\]
Hence, we have constructed $2^d$ bijections, implying that $2^d$ is a lower bound as well.
Thus, there are $2^d$ total bijections between $D$ and itself.
{{< /proof >}}
</li>
<li>
{{< exercise >}}
Let $D$ be an infinite set with cardinal number $d$.
Let $e$ be a cardinal number $\le d$.
Prove that $d^e$ is the number of subsets of $D$ with cardinal number $e$ and also the number with cardinal number $\le e$.
{{< /exercise >}}
{{< proof >}}
Let $E$ be an arbitrary set with cardinality $e$.
Then, each subset $S \subset D$ with cardinality $e$ can be characterized by a bijection between $E$ and $S$, or alternatively, an injection from $E$ to $D$.
From 7(b), recall that the number of such maps is $d^e$, so the number of subsets of $D$ with cardinality $e$ is $d^e$.

As for counting the number of subsets with cardinality $\le e$, I'm stuck. :)
{{< /proof >}}

</li>
<li>
{{< exercise >}}
Let $E$ and $D$ be sets with cardinal numbers $d$ and $e$.
Assume that $e$ is infinite and that $e \ge d$.
Prove that the number of functions from $E$ onto $D$ is $d^e$.
{{< /exercise >}}
{{< proof >}}
The set of surjections from $E$ to $D$ is a subset of the set of functions from $E$ to $D$.
Hence, $d^e$ is an upper bound.
To exhibit $d^e$ surjections, it suffices to fix a canonical "sink" $d \in D$ and consider the set of all subsets of $E$ with cardinal number $d$.
Then, for each of these subsets $S$, we pick a bijection $f$ between $S$ and $D$ and extend it by mapping all elements of $E \setminus S$ to the sink $d$.
This induced map is evidently a surjection, and furthermore, it is easily verified that each choice of $S$ gives rise to a unique bijection.
By the previous exercise, there are $d^e$ such subsets, so $d^e$ is also a lower bound.
Thus, the number of surjections is indeed itself $d^e$.
{{< /proof >}}
</li>
</ol>
