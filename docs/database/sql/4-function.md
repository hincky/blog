# 函数

## 聚集函数

AVG、MAX、MIN 等聚集函数会自动忽略值为 NULL 的数据行

|聚集函数|sql例句|备注|
|:---:|:---:|:---:|
|总行数COUNT()|`SELECT COUNT(*) FROM heros WHERE hp_max > 6000`,`SELECT COUNT(role_assist) FROM heros WHERE hp_max > 6000`,`SELECT COUNT(DISTINCT hp_max) FROM heros`|COUNT(role_assist)会忽略值为 NULL 的数据行，而 COUNT(*) 只是统计数据行数，不管某个字段是否为 NULL。|
|最大值MAX()|SELECT MAX(hp_max) FROM heros WHERE role_main = '射手' or role_assist = '射手||
|最小值MIN()|SELECT COUNT(*), AVG(hp_max), MAX(mp_max), MIN(attack_max), SUM(defense_max) FROM heros WHERE role_main = '射手' or role_assist = '射手'|
|求和SUM()|SELECT COUNT(*), AVG(hp_max), MAX(mp_max), MIN(attack_max), SUM(defense_max) FROM heros WHERE role_main = '射手' or role_assist = '射手'|
|平均值AVG()|SELECT COUNT(*), AVG(hp_max), MAX(mp_max), MIN(attack_max), SUM(defense_max) FROM heros WHERE role_main = '射手' or role_assist = '射手'|

|查询需求|语句|结果|
|:---:|:---:|:---:|
|查询射手（主要定位或者次要定位是射手）的最大生命值的最大值是多少|SELECT MAX(hp_max) FROM heros WHERE role_main = '射手' or role_assist = '射手'|6014|
|求平均值、最大值、最小值，以及总的防御最大值|SELECT COUNT(*), AVG(hp_max), MAX(mp_max), MIN(attack_max), SUM(defense_max) FROM heros WHERE role_main = '射手' or role_assist = '射手'||
|汉字则按照全拼拼音进行排列|SELECT MIN(CONVERT(name USING gbk)), MAX(CONVERT(name USING gbk)) FROM heros||
|查询不同的生命最大值的英雄数量是多少。|SELECT COUNT(DISTINCT hp_max) FROM heros||

## 算术函数
|算术函数|sql例句|
|:---:|:---:|
|绝对值ABS()|SELECT ABS(-2)，运行结果为 2。|
|取余 MOD()|SELECT MOD(101,3)，运行结果 2。|
|四舍五入，小数位数 ROUND()|SELECT ROUND(37.25,1)，运行结果 37.3。|

## 字符串函数
|算术函数|定义|sql例句|
|:---:|:---:|:---:|
|CONCAT()|多个字符串拼接|SELECT CONCAT('abc', 123)，运行结果为 abc123。|
|LENGTH()|计算字段长度，汉字=3个字符|SELECT LENGTH('你好')，运行结果为 6。|
|CHAR_LENGTH()|计算字段长度，都记为一个|SELECT CHAR_LENGTH('你好')，运行结果为 2。|
|LOWER()|小写|SELECT LOWER('ABC')，运行结果为 abc。|
|UPPER()|大写|SELECT UPPER('abc')，运行结果 ABC。|
|REPLACE()|替换函数|SELECT REPLACE('fabcd', 'abc', 123)，运行结果为 f123d。|
|SUBSTRING()|截取字符串：源字符串，开始位置，截取长度|SELECT SUBSTRING('fabcd', 1,3)，运行结果为 fab。|




