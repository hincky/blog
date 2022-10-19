# 基本语法

|作用|sql例句|
|:---:|:---:|
|查询对多个列|SELECT name, hp_max, mp_max, attack_max, defense_max FROM heros|
|起别名|SELECT name AS n, hp_max AS hm, mp_max AS mm, attack_max AS am, defense_max AS dm FROM heros|
|查询常数|SELECT '王者荣耀' as platform, name FROM heros|
|去除重复行|SELECT DISTINCT attack_range FROM heros|
|排序ASC，DESC| SELECT name, hp_max FROM heros ORDER BY mp_max, hp_max DESC|
|返回结果数量，提升效率|SELECT name, hp_max FROM heros ORDER BY hp_max DESC LIMIT 5|


select语句sql关键字顺序
```sql
SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ...LIMIT ...
```

sql语句实际执行顺序
```sql
FROM > WHERE > GROUP BY > HAVING > SELECT的字段 > DISTINCT > ORDER BY > LIMIT
```

提升查询效率的方法
- 限定返回结果的数量 limit
- 设置过滤条件 where having

