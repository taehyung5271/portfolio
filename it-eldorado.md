---
title: IT 엘도라도
slug: it-eldorado
---

# IT 엘도라도

> 기록될 때 비로소 빛이 나는 IT 지식의 보물 도시 👑

## 한 줄 소개
IT 지식을 **카테고리별로 정리**하고, **Markdown 기반으로 읽기 좋은 문서**로 관리할 수 있는 프로젝트입니다.

## 프로젝트 개요
- **목표**: 지식/노트를 “검색 가능한 자산”으로 축적하기
- **핵심 기능**: Markdown 뷰어, 프로젝트별 문서 분리, 댓글/좋아요(공개 피드백)

## 내가 맡은 역할
- 프로젝트 상세 페이지 UI 구성 (헤더 / 마크다운 / 댓글)
- Supabase 연동 설계 (projects, project_details, comments, skills)
- Raw → UI 정규화(normalize)로 화면단에서 쓰기 좋은 데이터 구조로 변환

## 주요 기능
- **프로젝트 상세 페이지**
  - 헤더(뒤로가기 포함)
  - Markdown 렌더링 영역
  - 댓글/좋아요 영역
- **댓글**
  - 누구나 댓글 작성 가능
  - 작성 조건: **닉네임 필수 + 댓글 내용 필수**
- **기술 스택 태그**
  - skills 테이블 기반으로 배경/텍스트 색상까지 DB에서 관리

## 기술 스택
- Frontend: React, TypeScript, React Query
- Backend/DB: Supabase(PostgreSQL)
- UI: CSS Modules
- Markdown: react-markdown

## 트러블슈팅 / 개선 포인트
- 조인된 데이터가 중첩되는 문제를 `normalizeProject`로 해결
- Vercel 배포에서 대소문자 경로 문제를 폴더/파일명 컨벤션으로 해결
- (예정) 댓글 스팸 방지: rate limit / captcha / edge function 고려

## 링크
- Service: (추후 입력)
- Repo: (추후 입력)

---