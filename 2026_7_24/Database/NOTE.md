# DBMS (DB 관리 시스템)

## 1. SQL 기반 관계형
- Ex. SQLite, MySQL, Supabase(PostgreSQL), Oracle
  - SQLite (클라이언트 수백명까진 커버 가능)
    - 경량DB; 임베디드에 도입하기 좋음 (주로 로깅용으로 사용됨)
    - SBC나 모바일쪽에 들어감
  - PostgreSQL(포스트그레스큐엘; 오픈소스)
  - Oracle은 자신의 DB에 대해 오류가 난 경우 책임을 지기 때문에 실무에서는 보험용으로 도입한다고 함
- if. 부서의 세부 분류 속성이 복수인 경우?
    - dep_id 라는 것을 두고 마치 포인터처럼 새로운 테이블에 연결시킨다
    - 이걸 외래키라고 하고, 테이블 식별자를 PK(공용키)라고 한다
    - 관계형 DB; 
    - 같은 Row 라면 반드시 같은 속성과 타입을 가져야하는 엄격함이 있음 => NoSQL이 이게 불편해서 도입된..? 

```js
// 암묵적 타입 일치가 관계형 DB의 표준
// NoSQL은 이런 방식..
const arr = [1, "ddd", true];
```

```sql
-- SQL 문법은 전체 대문자, 사용자 지정 값은 소문자
CREATE TABLE member (
  -- AUTOINCREMENT는 PK(int)가 자동 증가
  -- 단, 누락이 발생한 경우 빠진 부분을 채워 넣어주지 않음
  -- [Item] [Type] 
  member_id INTEGER PRIMARY KEY AUTOINCREMENT,
  -- NOT NULL 옵션은 비울 수 없음을 의미함
  username TEXT NOT NULL, 
  age INTEGER 
)
```
![alt text](image.png)

```bash
# mydatabase DB를 .read 명령어로 생성한다.
sqlite3 mydatabase.db ".read test.sql"
# 어떤 DB를 열건지?
sqlite3 mydatabase.db 
sqlite> .tables # 이름만 출력
sqlite> .schema # 모든 테이블 구조 상세 출력

```


### 1. 생성 (INSERT INTO)
```sql

-- 문자열은 작은 따옴표가 표준
INSERT INTO member (username, age) VALUES ('조니', 40);
INSERT INTO member (username, age) VALUES ('실비', 20);
-- 필드명과 값을 매칭 
INSERT INTO member (username) VALUES ('나나');

```

### 2. 조회 
```sql
-- 조건부로 가져오기
SELECT * FROM member WHERE member_id > 0;
SELECT username FROM member WHERE member_id == 1;
-- 특정 개수만 가져오기
SELECT * FROM member LIMIT 2;
-- 오름차순(ASC) 정렬
SELECT * FROM member ORDER BY username;
-- 내림차순(DESC) 정렬
SELECT * FROM member ORDER BY age DESC;
-- 맨 마지막 행 가져오기
SELECT * FROM member ORDER BY member_id DESC LIMIT 1;

```


### 3. 수정
```sql
-- UPDATE, DELETE 에서는 WHERE 필수 
UPDATE member
  SET username = '민호', age = 10
  WHERE member_id = 1;

SELECT * FROM member;
```

### 4. 삭제
```sql
-- 특정 Row만 날릴 때
DELETE FROM member WHERE member_id = 1;
SELECT * FROM member;

```




## 2. NoSQL 기반 비관계형
Ex. MongoDB, Firebase... 
: SQL의 단점 () 을 커버하기 위해 도입됨..