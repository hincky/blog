# 子查询

- 关联子查询：主句查询条件和从句查询条件进行了关联，外部执行一次里面就执行一次
- 非关联子查询：从句计算的结果是固定的，外部查询依赖里面查询的结果

## 关联子查询

对于外部查询返回的每一行数据，内部查询都要执行一次。另外，在关联子查询中是信息流是双向的。外部查询的每行数据传递一个值给子查询，然后子查询为每一行数据执行一次并返回它的记录。然后，外部查询根据返回的记录做出决策。

一般搭配：
1. 从句里面一般都有类似`WHERE a.team_id = b.team_id`的语法

```sql
SELECT player_name, height, team_id FROM player AS a WHERE height > (SELECT avg(height) FROM player AS b WHERE a.team_id = b.team_id)
```
2. 和 EXISTS 一起来使用

EXISTS 子查询用来判断条件是否满足，满足的话为 True，不满足为 False。

```sql
SELECT player_id, team_id, player_name FROM player WHERE `EXISTS` (SELECT player_id FROM player_score WHERE player.player_id = player_score.player_id)
```

## 非关联子查询

1. 先执行内层查询
2. 再执行外层查询


















