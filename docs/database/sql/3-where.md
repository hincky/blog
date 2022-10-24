# where

## 比较运算符
|比较运算符|sql例句|
|:---:|:---:|
|=|SELECT name, hp_max FROM heros WHERE hp_max **=** 6000|
|!=|SELECT name, hp_max FROM heros WHERE hp_max **!=** 6000|
|<=|SELECT name, hp_max FROM heros WHERE hp_max **<=** 6000|
|>=|SELECT name, hp_max FROM heros WHERE hp_max **>=** 6000|
|between|SELECT name, hp_max FROM heros WHERE hp_max **BETWEEN** 5399 **AND** 6811|
|is null|SELECT name, hp_max FROM heros WHERE hp_max **IS NULL**|

## 逻辑运算符
|逻辑运算符|sql例句|
|:---:|:---:|
|并且AND|`SELECT name, hp_max, mp_max FROM heros WHERE hp_max > 6000 AND mp_max > 1700 ORDER BY (hp_max+mp_max) DESC`|
|或者OR|`SELECT name, hp_max, mp_max FROM heros WHERE (hp_max+mp_max) > 8000 OR hp_max > 6000 AND mp_max > 1700 ORDER BY (hp_max+mp_max) DESC`,`SELECT name, hp_max, mp_max FROM heros WHERE ((hp_max+mp_max) > 8000 OR hp_max > 6000) AND mp_max > 1700 ORDER BY (hp_max+mp_max) DESC`|
|在指定范围内IN||
|非（否定）NOT||

AND和OR同时存在时，AND会优先执行，再到OR；如果要区别好优先级，可以利用()来指定

## like + 通配符 （小心索引失效）

|通配符|sql例句|
|:---:|:---:|
|% 代表零个或多个字符|SELECT name FROM heros WHERE name **LIKE '%太%'**|
|_ 只代表一个字符|SELECT name FROM heros WHERE name **LIKE '_%太%'**|

> 索引失效
%开头会让索引失效，然后进行全表扫描。

总结就是**like后面紧接通配符会让索引失效**

为了避免索引失效，%应该放在后面。

也就是说**like后面不用通配符**，并且**对字段进行索引**的时候才不会对全表进行扫描。

