---
title: 'AI Game playing with Isolation'
excerpt: 'Designing a game player with AI'
coverImage: '/assets/blog/game-playing/isolation_gameboard.png'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Owens Ehimen
ogImage:
  url: '/assets/blog/game-playing/isolation_gameboard.png'
---

## Notes

![5 x 5 Board](/assets/blog/game-playing/5X5-board.png "5 by 5 Isolation board")

On a 5 x 5 board:

* Maximum depth of game tree: **25** (max number of moves)
* Most game plays have **12** or less moves available (**Branching factor**)
* At the end of the game, there are progressively fewer moves available

<u>Maximum branching factor</u>: 

* 25(first move) x 24 (second move) x 12<sup>13</sup> (all other moves) x 12! (last 12 moves) = **(5 x 10<sup>8</sup>)**

The MINIMAX algorithm for an isolation board game tree will have to visit ***b<sup>d</sup>*** nodes to find an optimal move, where:

* b: branching factor
* d: average depth of the tree



