# 子查询

- 关联子查询：主句查询条件和从句查询条件进行了关联，外部执行一次里面就执行一次
- 非关联子查询：从句计算的结果是固定的，外部查询依赖里面查询的结果
- 集合比较子查询

## 关联子查询

对于外部查询返回的每一行数据，内部查询都要执行一次。另外，在关联子查询中是信息流是双向的。外部查询的每行数据传递一个值给子查询，然后子查询为每一行数据执行一次并返回它的记录。然后，外部查询根据返回的记录做出决策。

一般搭配：
1. 从句里面一般都有类似 **`WHERE a.team_id = b.team_id`** 的语法

```sql
SELECT player_name, height, team_id FROM player AS a WHERE height > (SELECT avg(height) FROM player AS b WHERE a.team_id = b.team_id)
```
2. 和 **`EXISTS/NOT EXISTS`** 一起来使用

EXISTS 子查询用来判断条件是否满足，满足的话为 True，不满足为 False。

```sql
SELECT player_id, team_id, player_name FROM player WHERE EXISTS (SELECT player_id FROM player_score WHERE player.player_id = player_score.player_id)
```

## 非关联子查询

1. 先执行内层查询
2. 再执行外层查询

外层查询依赖内层的查询结果

```sql
SELECT player_name, height FROM player WHERE height = (SELECT max(height) FROM player)
```



## 集合比较子查询

`ANY`、`ALL` **关键字必须与一个比较操作符一起使用**

> 因为如果你不使用比较操作符，就起不到集合比较的作用，那么使用 ANY 和 ALL 就没有任何意义。

|比较类型|作用|例句|
|:---:|:---:|:---:|
|IN|判断是否在集合中|SELECT player_id, team_id, player_name FROM player WHERE player_id **in** (SELECT player_id FROM player_score WHERE player.player_id = player_score.player_id)|
|ANY|与子查询返回的任何值比较|SELECT player_id, player_name, height FROM player WHERE height > ANY (SELECT height FROM player WHERE team_id = 1002)|
|ALL|与子查询返回的所有值比较|SELECT player_id, player_name, height FROM player WHERE height > ALL (SELECT height FROM player WHERE team_id = 1002)|
|SOME|与ANY作用相同，一般用ANY||

### **`IN`** 和 **`EXISTS`** 如何选择

```sql
SELECT * FROM A WHERE cc IN (SELECT cc FROM B)

SELECT * FROM A WHERE EXIST (SELECT cc FROM B WHERE B.cc=A.cc)
```
> 在这里例子当中，表 A 指的是 player 表，表 B 指的是 player_score 表。

在对 cc 列建立索引的情况下，我们还需要判断表 A 和表 B 的大小。

如果**表 A 比表 B 大**，那么 `IN` 子查询的效率要比 `EXIST` 子查询效率高，因为这时 B 表中如果对 cc 列进行了索引，那么 IN 子查询的效率就会比较高。

如果**表 A 比表 B 小**，那么使用 `EXISTS` 子查询效率会更高，因为我们可以使用到 A 表中对 cc 列的索引，而不用从 B 中进行 cc 列的查询。

> 总结

1. 都是对较小的表进行索引，提高查询效率；
2. 小表在后（内层），用 `IN`
3. 小表在前（外层），用 `EXISTS`

IN表是外边和内表进行hash连接，是先执行子查询。
EXISTS是对外表进行循环，然后在内表进行查询。
因此如果外表数据量大，则用IN，如果外表数据量小，也用EXISTS。

### NOT IN 和 NOT EXISTS 如何选择

IN有一个缺陷是不能判断NULL，因此如果字段存在NULL值，则会出现返回，所以最好使用NOT EXISTS。

