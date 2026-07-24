CREATE TABLE member (
  member_id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  money INTEGER NOT NULL,
  gender TEXT,
  job TEXT,
  address TEXT NOT NULL
);

INSERT INTO member
  (username, money, gender, job, address)
VALUES
  -- 동명이인: '김영민' 2명
  ('김영민', 0, 'M', '학생', '서울 강남구'),
  ('김영민', 1000000000, 'F', '디자이너', '부산 수영구'),

  -- 변호사 2명 이상
  ('최수진', 50000, 'F', '변호사', '대전 중구'),
  ('김정환', 10, 'M', '변호사', '부산 해운대구'),

  -- 성별 NULL 처리 2명
  ('이지현', 15000000, NULL, '작가', '경기 수원시'),
  ('이수진', 400000, NULL, '학생', '경북 구미시'),

  -- 기타 데이터
  ('박지영', 800000000, 'F', '의사', '대구 달서구'),
  ('이민호', 200000000, 'M', '회사원', '인천 남동구'),
  ('한예린', 300000000, 'F', '교사', '강원 원주시'),
  ('박민영', 7000000000, 'F', '공무원', '충남 천안시'),
  ('서지원', 1000, 'M', '개발자', '경기 고양시 일산동구'),
  ('이수진', 500000000, 'F', '디자이너', '울산 중구'),
  ('정우성', 10000000000, 'M', '연예인', '광주 서구'),
  ('조재영', 9999999999, 'M', '사업가', '경남 창원시 성산구'),
  ('박준형', 60000000, 'M', '회사원', '전북 전주시 완산구'),
  ('윤서영', 1000, 'F', '주부', '전남 목포시'),
  ('장민서', 100000, 'F', '프리랜서', '충북 청주시 청원구'),
  ('백종현', 5000000000, 'M', '셰프', '제주 제주시'),
  ('오지윤', 999999999, 'F', '간호사', '경남 진주시'),
  ('하도윤', 100000, 'M', '기자', '경북 포항시 남구');

--  1. 전체조회하되, member_id , username , money 필드만 포함하라.
SELECT member_id, username, money FROM member;

--  2. username 이 '김영민' 인 데이터를 찾아라. (동명이인)
SELECT * FROM member WHERE username == '김영민';

--  3. money 를 내림차순 정렬 후, 상위 10명만 출력하라.
SELECT money FROM member ORDER BY money DESC LIMIT 10;

--  4. gender 가 F 인 데이터만 찾아 출력하라.
SELECT * FROM member WHERE gender == 'F';

--  5. gender 필드를 다음과 같이 수정한 후, 전체 출력하라.
-- M => male; F => female
UPDATE member SET gender = 'male' WHERE gender = 'M';
UPDATE member SET gender = 'female' WHERE gender = 'F';
SELECT * FROM member;

-- 참고로 컬럼 명 자체를 바꾸려면..
-- ALTER TABLE member RENAME TO members;        -- 테이블명 변경
-- ALTER TABLE member RENAME COLUMN age TO old_age; -- 컬럼명 변경

-- 6. 모든 사람의 money 를 0 원으로 만든 후, 전체 출력하라.
UPDATE member SET money = 0;
SELECT * FROM member;

-- 7. job 이 변호사인 사람을 모두 삭제하고, 전체 출력하라.
DELETE FROM member WHERE job == '변호사';
SELECT * FROM member;
