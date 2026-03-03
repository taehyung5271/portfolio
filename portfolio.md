---
title: KTH Portfolio
slug: portfolio
---

# KTH Portfolio

> 소개, 기술, 프로젝트, 경력을 한 페이지에서 보여주는 개인 포트폴리오 웹앱

## 한 줄 소개
React + TypeScript 기반으로 제작한 포트폴리오 사이트이며, 프로젝트 상세를 Markdown으로 관리하고 댓글/좋아요 피드백까지 받을 수 있도록 구성했습니다.

## 프로젝트 개요
- **목표**: 개인 이력과 프로젝트를 한 곳에서 명확하게 전달
- **핵심 기능**: 섹션형 랜딩 페이지 + 프로젝트 상세(Markdown) + 댓글/좋아요

## 내가 맡은 역할
- 화면 설계 및 구현 (Intro / About / Skills / Projects / Career)
- Supabase 테이블 연동 (`projects`, `skills`, `careers`, `comments`, `project_likes`)
- React Query 기반 데이터 패칭/캐싱 구조 설계
- Raw 응답을 UI 타입으로 변환하는 normalize 유틸 구성

## 주요 기능
- **홈 랜딩 페이지**
  - 스크롤 네비게이션(섹션 이동)
  - 소개/기술/프로젝트/경력 섹션 구성
- **프로젝트 리스트**
  - 프로젝트명/기술스택 검색
  - 스택 태그 필터
  - 카드 클릭으로 상세 페이지 이동
- **프로젝트 상세 페이지**
  - slug 기반 단건 조회
  - Markdown 본문 렌더링
  - 댓글 작성/목록
  - 좋아요 토글 및 사용자별 상태 유지(localStorage user key)

## 기술 스택
- Frontend: React 19, TypeScript, Vite
- Data Fetching: TanStack Query (React Query)
- Backend/DB: Supabase (PostgreSQL)
- Routing: React Router
- UI: CSS Modules
- Markdown: react-markdown

## 트러블슈팅 / 개선 포인트
- Supabase 조인 응답 형태(단일/배열 혼재)를 normalize 로직으로 정리
- 좋아요 중복 입력(UNIQUE 충돌) 케이스를 API 레이어에서 방어
- 댓글/좋아요 이후 `invalidateQueries`로 상세 데이터 즉시 동기화
- (예정) 댓글 스팸 방지(캡차/레이트리밋) 및 NotFound 라우트 연결

## 링크
- Service: (추후 입력)
- Repo: (추후 입력)

---
