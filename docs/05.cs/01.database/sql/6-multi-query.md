---
title: 6-multi-query
date: 2022-10-29 11:41:05
permalink: /pages/1ff358/
categories: 
  - database
  - sql
tags: 
  - null
author: 
  name: hincky
  link: https://github.com/hincky
---
# 多表查询

## 交叉连接
```sql
SELECT * FROM player CROSS JOIN team

SELECT * FROM t1 CROSS JOIN t2 CROSS JOIN t3
```

## 等值与自然连接
```sql
SELECT player_id, player.team_id, player_name, height, team_name FROM player, team WHERE player.team_id = team.team_id
```
使用别名
```sql
SELECT player_id, a.team_id, player_name, height, team_name FROM player AS a, team AS b WHERE a.team_id = b.team_id
```

> 下面多加一个ON连接，作用和自然连接一样，理解更直观
```sql
SELECT player_id, team_id, player_name, height, team_name FROM player NATURAL JOIN team

SELECT player_id, player.team_id, player_name, height, team_name FROM player JOIN team ON player.team_id = team.team_id
```
连接条件是ON player.team_id = team.team_id，相当于是用 ON 进行了 team_id 字段的等值连接。

需要连接的表会采用 JOIN 进行连接，ON 指定了连接条件，后面可以是等值连接，也可以采用非等值连接。

## 非等值连接
想要知道每个球员的身高的级别
```sql
SELECT p.player_name, p.height, h.height_level
FROM player AS p, height_grades AS h
WHERE p.height BETWEEN h.height_lowest AND h.height_highest
```

## 左连接
主表在左边，从表在右边
```sql
SELECT * FROM player, team where player.team_id = team.team_id(+)

SELECT * FROM player LEFT JOIN team on player.team_id = team.team_id
```

表格中一共有 3 支球队，现在这 3 支球队需要进行比赛，请用一条 SQL 语句显示出所有可能的比赛组合。

> 分主客队
```sql
SELECT CONCAT(kedui.team_name, ' VS ', zhudui.team_name) as '客队 VS 主队' FROM team as zhudui LEFT JOIN team as kedui on zhudui.team_id<>kedui.team_id;
```
> 不分主客队
```sql
SELECT a.team_name as '队伍1' ,'VS' , b.team_name as '队伍2' FROM team as a ,team as b where a.team_id<b.team_id;
```

## 右连接
主表在右边，从表在左边
```sql
SELECT * FROM player, team where player.team_id(+) = team.team_id

SELECT * FROM player RIGHT JOIN team on player.team_id = team.team_id
```

## 自连接
查看比布雷克·格里芬高的球员都有谁，以及他们的对应身高

```sql
SELECT b.player_name, b.height FROM player as a , player as b WHERE a.player_name = '布雷克-格里芬' and a.height < b.height
```

如果不用自连接就要分为两次sql查询
1. 查询布雷克·格里芬的身高
2. 比 2.08 高的球员都有谁，以及他们的对应身高：

```sql
SELECT height FROM player WHERE player_name = '布雷克-格里芬'

SELECT player_name, height FROM player WHERE height > 2.08
```








