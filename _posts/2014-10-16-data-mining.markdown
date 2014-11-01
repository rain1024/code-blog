---
layout: post
title:  "Data Mining"
date:   2014-10-16 09:27:15
categories: ai
---

## Data Mining

### Map Reduce

#### Combiners

Combiner combines the values of all keys of a single mapper (single node)

![](/assets/1.png)

#### Partition

### Graph

* Technological Network (Seven Bridges of Konigsberd) 

#### Web as a Graph

Web as a directed graph

* Node: Webpages
* Edges: Hyperlinks

How to organize the Web?

* First try: Human curated **Web directories**
* Second try: Web Search
	* Information Retrieval investigates: Find releveant docs in a small and trusted set
	* BUt: Web is huge, full of untrusted documents, random things, web spam, etc

Web Serch: 2 Challenges

2 challenges of web search

1. Web contains many sources of information. Who to "trust"?
2. What is the "best" answer to query "newspaper"?

Ranking Nodes on the Graph

* All web pages are not equally "important"
* There is large diversity in the web-graph node connectivity

Link Analysis Algoritms

We will cover the following Link Analysis approaches for computing importances of nodes in a graph:

* Page Rank
* Hubs and Authorities (HITS)
* Topic-Specific (Personalized) Page Rank
* Web Spam Dectection Algorithms

#### Page Rank

* Links as Votes

## Clustering

### Community Detection in Graph 

#### The model: community-affilication graph model

<svg width="500" height="200" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
<!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
<g>
<title>Layer 1</title>
<ellipse cx="100" cy="160" id="svg_3" fill="#00ffff" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<ellipse cx="125" cy="160" id="svg_3" fill="#00ffff" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<ellipse cx="150" cy="160" id="svg_3" fill="#00ffff" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<ellipse cx="175" cy="160" id="svg_3" fill="#00ffff" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<ellipse cx="200" cy="160" id="svg_3" fill="#00ffff" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<ellipse cx="225" cy="160" id="svg_3" fill="#FF0000" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<ellipse cx="250" cy="160" id="svg_3" fill="#FF0000" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<ellipse cx="275" cy="160" id="svg_3" fill="#FF0000" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<ellipse cx="300" cy="160" id="svg_3" fill="#FF0000" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<ellipse cx="325" cy="160" id="svg_3" fill="#00ff00" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<ellipse cx="350" cy="160" id="svg_3" fill="#00ff00" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<ellipse cx="375" cy="160" id="svg_3" fill="#00ff00" stroke="#000000" stroke-width="2" stroke-dasharray="null" opacity="0.9" rx="10" ry="10"/>
<rect opacity="0.9" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="#00ff00" id="svg_4" height="30" width="30" y="24" x="295"/>
<rect opacity="0.9" stroke-dasharray="null" stroke-width="2" stroke="#000000" fill="#00ffff" id="svg_5" height="30" width="30" y="22" x="187"/>
<text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" opacity="0.9" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000" id="svg_7" y="44" x="203">A</text>
<text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" opacity="0.9" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000" id="svg_8" y="45" x="310">B</text>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_9" y2="153" x2="101" y1="59" x1="194"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_11" y2="143" x2="128" y1="59" x1="194"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_12" y2="142" x2="157" y1="64" x1="191"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_13" y2="148" x2="178" y1="62" x1="192"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_14" y2="135" x2="179" y1="147" x1="178"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_15" y2="152" x2="204" y1="65" x1="195"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_16" y2="148" x2="225" y1="66" x1="200"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_17" y2="141" x2="250" y1="66" x1="197"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_18" y2="145" x2="273" y1="66" x1="198"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_19" y2="146" x2="302" y1="62" x1="193"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_20" y2="144" x2="227" y1="58" x1="304"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_21" y2="139" x2="251" y1="59" x1="302"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_22" y2="146" x2="273" y1="61" x1="302"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_23" y2="144" x2="303" y1="62" x1="302"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_24" y2="144" x2="325" y1="61" x1="302"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_25" y2="145" x2="347" y1="61" x1="306"/>
<line opacity="0.9" fill="none" stroke-dasharray="null" stroke-width="2" stroke="#000000" id="svg_26" y2="145" x2="375" y1="65" x1="305"/>
<text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="20" opacity="0.9" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000" id="svg_30" y="32" x="170">p</text>
<text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="20" opacity="0.9" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000" id="svg_31" y="49" x="176">A</text>
<text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="20" opacity="0.9" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000" id="svg_32" y="30" x="277">p</text>
<text id="svg_33" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="20" opacity="0.9" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000" y="69" x="196">A</text>
<text id="svg_34" xml:space="preserve" text-anchor="middle" font-family="serif" font-size="20" opacity="0.9" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000" y="51" x="280">B</text>
</g>
</svg>

AGM: Affiliation Graph Model: a generative model $B(V, C, M, {p_c})$ for graphs:

* Nodes $V$, Communities $C$, Memeberships $M$
* Each community $c$ has a single probability $p_c$

##### AGM generates the links


* For each pair of nodes in community $A$, we connect them with prob $P_A$
* The overall edge probability is:

$P(u, v) = \prod _ {c \in M_u \cap M_v } (1 - p_c)$

##### AGM Flexibility

* AGM can express a variety of community structures: non-overlapping, overlapping, nested

#### BigCLAM

* Relaxation: Memberships have strengths

* $F_uA$: the membership strength of node $u$ to community $A$ $ F_{uA} = 0 $: no membership
* Each community A links nodes indenpendently:

$$ P_A(u,v) = 1 - exp(-F_uA * F_vA)$$

### Spectural Clustering
