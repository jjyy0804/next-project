import mongoose from "mongoose";

import dbConnect from "./dbConnect";
import CourseModel from "../app/api/models/Course";
import LectureModel from "../app/api/models/Lecture";
import MaterialModel from "../app/api/models/Material";
import RoadmapModel from "../app/api/models/Roadmap";

const data = {
  roadmaps: [
    {
      id: 1,
      title: "웹 개발 입문",
      description: "웹 개발의 기초를 배우는 로드맵입니다.",
      courses: [1, 2, 3], // HTML, CSS, JavaScript, React
      createdAt: "2023-01-01T12:00:00Z",
      updatedAt: "2023-01-01T12:00:00Z",
    },
    {
      id: 2,
      title: "데이터 과학 기초",
      description: "데이터 과학의 기본 개념과 기술을 배웁니다.",
      courses: [4, 5, 9, 10], // Python, Pandas, 기계 학습 기초, 딥러닝 기초
      createdAt: "2023-01-02T12:00:00Z",
      updatedAt: "2023-01-02T12:00:00Z",
    },
    {
      id: 3,
      title: "모바일 앱 개발",
      description: "모바일 앱 개발의 기초를 배웁니다.",
      courses: [6, 7], // Android, iOS
      createdAt: "2023-01-03T12:00:00Z",
      updatedAt: "2023-01-03T12:00:00Z",
    },
    {
      id: 4,
      title: "클라우드 컴퓨팅",
      description: "클라우드 컴퓨팅의 기본 개념에 대해 배웁니다.",
      courses: [8, 19], // AWS 기초, NoSQL 기초
      createdAt: "2023-01-04T12:00:00Z",
      updatedAt: "2023-01-04T12:00:00Z",
    },
    {
      id: 5,
      title: "인공지능 기초",
      description: "인공지능의 기본 개념과 알고리즘을 배웁니다.",
      courses: [9, 10], // 기계 학습 기초, 딥러닝 기초
      createdAt: "2023-01-05T12:00:00Z",
      updatedAt: "2023-01-05T12:00:00Z",
    },
    {
      id: 6,
      title: "게임 개발 입문",
      description: "게임 개발의 기초를 배우는 로드맵입니다.",
      courses: [11, 12, 13], // Unity, C#, 게임 디자인
      createdAt: "2023-01-06T12:00:00Z",
      updatedAt: "2023-01-06T12:00:00Z",
    },
    {
      id: 7,
      title: "사물인터넷(IoT)",
      description: "IoT의 기본 개념과 기술을 배웁니다.",
      courses: [14, 15], // IoT 기초, 블록체인 기초
      createdAt: "2023-01-07T12:00:00Z",
      updatedAt: "2023-01-07T12:00:00Z",
    },
    {
      id: 8,
      title: "블록체인 기초",
      description: "블록체인의 기본 개념과 작동 원리를 배웁니다.",
      courses: [15, 17], // 블록체인 기초, DevOps 기초
      createdAt: "2023-01-08T12:00:00Z",
      updatedAt: "2023-01-08T12:00:00Z",
    },
    {
      id: 9,
      title: "DevOps 기본",
      description: "DevOps의 기본 개념과 도구를 배웁니다.",
      courses: [16, 19], // DevOps 기초, NoSQL 기초
      createdAt: "2023-01-09T12:00:00Z",
      updatedAt: "2023-01-09T12:00:00Z",
    },
    {
      id: 10,
      title: "사이버 보안",
      description: "사이버 보안의 기초를 배우는 로드맵입니다.",
      courses: [17, 18], // 사이버 보안 기초, API 보안
      createdAt: "2023-01-10T12:00:00Z",
      updatedAt: "2023-01-10T12:00:00Z",
    },
  ],
  courses: [
    {
      id: 1,
      title: "HTML & CSS 기초",
      description: "웹 페이지의 구조와 스타일을 배우는 과정입니다.",
      lectures: [1, 2, 3, 30, 31], // HTML 기초, CSS 기초, HTML5의 새로운 태그
      createdAt: "2023-01-01T12:00:00Z",
      updatedAt: "2023-01-01T12:00:00Z",
    },
    {
      id: 2,
      title: "JavaScript 기초",
      description: "웹 페이지에 동작을 추가하는 JavaScript 기초 과정입니다.",
      lectures: [4, 5, 6], // JavaScript 변수와 자료형, JavaScript 함수, JavaScript DOM 조작
      createdAt: "2023-01-02T12:00:00Z",
      updatedAt: "2023-01-02T12:00:00Z",
    },
    {
      id: 3,
      title: "React.js 입문",
      description: "React.js를 이용한 프론트엔드 개발 기초 과정입니다.",
      lectures: [7, 8, 9], // React.js 기본 컴포넌트, React.js 상태 관리, React.js Hooks
      createdAt: "2023-01-03T12:00:00Z",
      updatedAt: "2023-01-03T12:00:00Z",
    },
    {
      id: 4,
      title: "Python 기초",
      description: "Python 프로그래밍 언어의 기초를 배웁니다.",
      lectures: [10, 11, 35], // Python 기본 문법, Python 데이터 타입
      createdAt: "2023-01-04T12:00:00Z",
      updatedAt: "2023-01-04T12:00:00Z",
    },
    {
      id: 5,
      title: "Pandas를 이용한 데이터 분석",
      description: "Pandas를 사용하여 데이터 분석을 배우는 과정입니다.",
      lectures: [12, 13], // Pandas 기초, Pandas 데이터프레임
      createdAt: "2023-01-05T12:00:00Z",
      updatedAt: "2023-01-05T12:00:00Z",
    },
    {
      id: 6,
      title: "안드로이드 앱 개발 기초",
      description: "Android 앱 개발의 기초를 배우는 과정입니다.",
      lectures: [14, 15], // 안드로이드 앱 기본 컴포넌트, 안드로이드 레이아웃
      createdAt: "2023-01-06T12:00:00Z",
      updatedAt: "2023-01-06T12:00:00Z",
    },
    {
      id: 7,
      title: "iOS 앱 개발 기초",
      description: "iOS 앱 개발의 기초를 배우는 과정입니다.",
      lectures: [16, 17], // iOS 앱 기본 컴포넌트, iOS 레이아웃
      createdAt: "2023-01-07T12:00:00Z",
      updatedAt: "2023-01-07T12:00:00Z",
    },
    {
      id: 8,
      title: "AWS 기초",
      description: "AWS의 기본 개념과 사용법을 배웁니다.",
      lectures: [18, 19], // AWS EC2 사용법, AWS S3 사용법
      createdAt: "2023-01-08T12:00:00Z",
      updatedAt: "2023-01-08T12:00:00Z",
    },
    {
      id: 9,
      title: "기계 학습 기초",
      description: "기계 학습의 기본 개념과 알고리즘을 배웁니다.",
      lectures: [20, 32], // 기계 학습 개요, 기계 학습 모델 평가
      createdAt: "2023-01-09T12:00:00Z",
      updatedAt: "2023-01-09T12:00:00Z",
    },
    {
      id: 10,
      title: "딥러닝 기초",
      description: "딥러닝의 기본 개념과 신경망을 배웁니다.",
      lectures: [21, 33], // 딥러닝 개요, 딥러닝 신경망 구조
      createdAt: "2023-01-10T12:00:00Z",
      updatedAt: "2023-01-10T12:00:00Z",
    },
    {
      id: 11,
      title: "Unity 게임 개발 기초",
      description: "Unity를 이용한 게임 개발 기초 과정입니다.",
      lectures: [22], // Unity 기본 사용법, 게임 디자인 개요
      createdAt: "2023-01-11T12:00:00Z",
      updatedAt: "2023-01-11T12:00:00Z",
    },
    {
      id: 12,
      title: "C# 기초",
      description: "C# 프로그래밍 언어의 기초를 배웁니다.",
      lectures: [23], // C# 기본 문법, C# 객체지향 프로그래밍
      createdAt: "2023-01-12T12:00:00Z",
      updatedAt: "2023-01-12T12:00:00Z",
    },
    {
      id: 13,
      title: "게임 디자인 기초",
      description: "게임 디자인의 기본 원칙을 배우는 과정입니다.",
      lectures: [24], // 게임 디자인 원칙, 게임 디자인 프로세스
      createdAt: "2023-01-13T12:00:00Z",
      updatedAt: "2023-01-13T12:00:00Z",
    },
    {
      id: 14,
      title: "IoT 기초",
      description: "사물인터넷의 기본 개념과 기술을 배우는 과정입니다.",
      lectures: [25, 41], // IoT 개요, IoT 응용 분야
      createdAt: "2023-01-14T12:00:00Z",
      updatedAt: "2023-01-14T12:00:00Z",
    },
    {
      id: 15,
      title: "블록체인 기초",
      description: "블록체인의 기본 개념과 작동 원리를 배웁니다.",
      lectures: [26, 40], // 블록체인 개요, 블록체인 응용 분야
      createdAt: "2023-01-15T12:00:00Z",
      updatedAt: "2023-01-15T12:00:00Z",
    },
    {
      id: 16,
      title: "DevOps 기초",
      description: "DevOps의 기본 개념과 도구를 배우는 과정입니다.",
      lectures: [34, 43, 44], // DevOps 기본 개념, DevOps 도구 소개
      createdAt: "2023-01-16T12:00:00Z",
      updatedAt: "2023-01-16T12:00:00Z",
    },
    {
      id: 17,
      title: "사이버 보안 기초",
      description: "사이버 보안의 기본 개념을 배우는 과정입니다.",
      lectures: [], // 사이버 보안 기본 개념, 사이버 공격 유형
      createdAt: "2023-01-17T12:00:00Z",
      updatedAt: "2023-01-17T12:00:00Z",
    },
    {
      id: 18,
      title: "API 개발 기초",
      description: "API 개발의 기본 개념과 사용법을 배우는 과정입니다.",
      lectures: [27, 42], // API 개요, RESTful API 설계 원칙
      createdAt: "2023-01-18T12:00:00Z",
      updatedAt: "2023-01-18T12:00:00Z",
    },
    {
      id: 19,
      title: "NoSQL 기초",
      description: "NoSQL 데이터베이스의 기본 개념을 배우는 과정입니다.",
      lectures: [], // NoSQL 개요, NoSQL 데이터 모델
      createdAt: "2023-01-19T12:00:00Z",
      updatedAt: "2023-01-19T12:00:00Z",
    },
    {
      id: 20,
      title: "RESTful API 기초",
      description: "RESTful API의 개념과 사용법을 배우는 과정입니다.",
      lectures: [28, 29], // RESTful API 개요, RESTful API 설계 원칙
      createdAt: "2023-01-20T12:00:00Z",
      updatedAt: "2023-01-20T12:00:00Z",
    },
    {
      id: 21,
      title: "SQL 기초",
      description: "SQL의 기본 개념을 배우는 과정입니다.",
      lectures: [38, 39], // SQL 기본 쿼리, 데이터베이스 정규화
      createdAt: "2023-01-21T12:00:00Z",
      updatedAt: "2023-01-21T12:00:00Z",
    },
    {
      id: 22,
      title: "프로그래밍 언어 기초",
      description: "프로그래밍 언어의 기초를 배우는 과정입니다.",
      lectures: [36, 37], // SQL 기본 쿼리, 데이터베이스 정규화
      createdAt: "2023-01-21T12:00:00Z",
      updatedAt: "2023-01-21T12:00:00Z",
    },
  ],
  lectures: [
    {
      id: 1,
      title: "HTML 기초",
      description: "HTML의 기본 구조와 태그를 배우는 강의입니다.",
      materials: [1, 2],
      createdAt: "2023-02-01T12:00:00Z",
      updatedAt: "2023-02-01T12:00:00Z",
    },
    {
      id: 2,
      title: "CSS 기초",
      description: "CSS의 기본 스타일링 방법을 배우는 강의입니다.",
      materials: [3, 4, 5, 52, 53, 63],
      createdAt: "2023-02-02T12:00:00Z",
      updatedAt: "2023-02-02T12:00:00Z",
    },
    {
      id: 3,
      title: "HTML5의 새로운 태그",
      description: "HTML5에서 추가된 새로운 태그를 배우는 강의입니다.",
      materials: [51, 62],
      createdAt: "2023-02-03T12:00:00Z",
      updatedAt: "2023-02-03T12:00:00Z",
    },
    {
      id: 4,
      title: "JavaScript 변수와 자료형",
      description: "JavaScript의 변수와 자료형에 대해 배우는 강의입니다.",
      materials: [6, 7],
      createdAt: "2023-02-04T12:00:00Z",
      updatedAt: "2023-02-04T12:00:00Z",
    },
    {
      id: 5,
      title: "JavaScript 함수",
      description: "JavaScript의 함수에 대해 배우는 강의입니다.",
      materials: [8, 64],
      createdAt: "2023-02-05T12:00:00Z",
      updatedAt: "2023-02-05T12:00:00Z",
    },
    {
      id: 6,
      title: "JavaScript DOM 조작",
      description: "JavaScript를 이용한 DOM 조작 방법을 배우는 강의입니다.",
      materials: [9, 10, 54],
      createdAt: "2023-02-06T12:00:00Z",
      updatedAt: "2023-02-06T12:00:00Z",
    },
    {
      id: 7,
      title: "React.js 기본 컴포넌트",
      description: "React.js의 기본 컴포넌트 구조에 대해 배우는 강의입니다.",
      materials: [11, 12, 13],
      createdAt: "2023-02-07T12:00:00Z",
      updatedAt: "2023-02-07T12:00:00Z",
    },
    {
      id: 8,
      title: "React.js 상태 관리",
      description: "React.js에서 상태 관리 방법을 배우는 강의입니다.",
      materials: [14],
      createdAt: "2023-02-08T12:00:00Z",
      updatedAt: "2023-02-08T12:00:00Z",
    },
    {
      id: 9,
      title: "React.js Hooks",
      description: "React.js의 Hooks 사용법을 배우는 강의입니다.",
      materials: [65],
      createdAt: "2023-02-09T12:00:00Z",
      updatedAt: "2023-02-09T12:00:00Z",
    },
    {
      id: 10,
      title: "Python 기본 문법",
      description: "Python의 기본 문법을 배우는 강의입니다.",
      materials: [15, 55, 66],
      createdAt: "2023-02-10T12:00:00Z",
      updatedAt: "2023-02-10T12:00:00Z",
    },
    {
      id: 11,
      title: "Python 데이터 타입",
      description: "Python에서 사용되는 데이터 타입에 대해 배우는 강의입니다.",
      materials: [16, 17],
      createdAt: "2023-02-11T12:00:00Z",
      updatedAt: "2023-02-11T12:00:00Z",
    },
    {
      id: 12,
      title: "Pandas 기초",
      description: "Pandas 라이브러리의 기본 사용법을 배우는 강의입니다.",
      materials: [18],
      createdAt: "2023-02-12T12:00:00Z",
      updatedAt: "2023-02-12T12:00:00Z",
    },
    {
      id: 13,
      title: "Pandas 데이터프레임",
      description: "Pandas의 데이터프레임 사용법에 대해 배우는 강의입니다.",
      materials: [19, 67],
      createdAt: "2023-02-13T12:00:00Z",
      updatedAt: "2023-02-13T12:00:00Z",
    },
    {
      id: 14,
      title: "안드로이드 앱 기본 컴포넌트",
      description: "안드로이드 앱의 기본 컴포넌트를 배우는 강의입니다.",
      materials: [20],
      createdAt: "2023-02-14T12:00:00Z",
      updatedAt: "2023-02-14T12:00:00Z",
    },
    {
      id: 15,
      title: "안드로이드 레이아웃",
      description:
        "안드로이드 앱의 레이아웃을 구성하는 방법을 배우는 강의입니다.",
      materials: [21, 68],
      createdAt: "2023-02-15T12:00:00Z",
      updatedAt: "2023-02-15T12:00:00Z",
    },
    {
      id: 16,
      title: "iOS 앱 기본 컴포넌트",
      description: "iOS 앱의 기본 컴포넌트를 배우는 강의입니다.",
      materials: [22],
      createdAt: "2023-02-16T12:00:00Z",
      updatedAt: "2023-02-16T12:00:00Z",
    },
    {
      id: 17,
      title: "iOS 레이아웃",
      description: "iOS 앱의 레이아웃을 구성하는 방법을 배우는 강의입니다.",
      materials: [23, 69],
      createdAt: "2023-02-17T12:00:00Z",
      updatedAt: "2023-02-17T12:00:00Z",
    },
    {
      id: 18,
      title: "AWS EC2 사용법",
      description: "AWS EC2를 사용하는 방법을 배우는 강의입니다.",
      materials: [24, 102, 103],
      createdAt: "2023-02-18T12:00:00Z",
      updatedAt: "2023-02-18T12:00:00Z",
    },
    {
      id: 19,
      title: "AWS S3 사용법",
      description: "AWS S3를 사용하는 방법을 배우는 강의입니다.",
      materials: [25],
      createdAt: "2023-02-19T12:00:00Z",
      updatedAt: "2023-02-19T12:00:00Z",
    },
    {
      id: 20,
      title: "기계 학습 개요",
      description: "기계 학습의 기본 개념을 배우는 강의입니다.",
      materials: [26],
      createdAt: "2023-02-20T12:00:00Z",
      updatedAt: "2023-02-20T12:00:00Z",
    },
    {
      id: 21,
      title: "딥러닝 개요",
      description: "딥러닝의 기본 개념을 배우는 강의입니다.",
      materials: [27, 91],
      createdAt: "2023-02-21T12:00:00Z",
      updatedAt: "2023-02-21T12:00:00Z",
    },
    {
      id: 22,
      title: "Unity 기본 사용법",
      description: "Unity의 기본 사용법을 배우는 강의입니다.",
      materials: [28, 40, 92],
      createdAt: "2023-02-22T12:00:00Z",
      updatedAt: "2023-02-22T12:00:00Z",
    },
    {
      id: 23,
      title: "C# 기본 문법",
      description: "C#의 기본 문법을 배우는 강의입니다.",
      materials: [29, 41, 93],
      createdAt: "2023-02-23T12:00:00Z",
      updatedAt: "2023-02-23T12:00:00Z",
    },
    {
      id: 24,
      title: "게임 디자인 개요",
      description: "게임 디자인의 기본 개념을 배우는 강의입니다.",
      materials: [30],
      createdAt: "2023-02-24T12:00:00Z",
      updatedAt: "2023-02-24T12:00:00Z",
    },
    {
      id: 25,
      title: "IoT 개요",
      description: "사물인터넷의 기본 개념을 배우는 강의입니다.",
      materials: [31],
      createdAt: "2023-02-25T12:00:00Z",
      updatedAt: "2023-02-25T12:00:00Z",
    },
    {
      id: 26,
      title: "블록체인 개요",
      description: "블록체인의 기본 개념을 배우는 강의입니다.",
      materials: [32],
      createdAt: "2023-02-26T12:00:00Z",
      updatedAt: "2023-02-26T12:00:00Z",
    },
    {
      id: 27,
      title: "API 개발 개요",
      description: "API 개발의 기본 개념을 배우는 강의입니다.",
      materials: [33, 104],
      createdAt: "2023-02-27T12:00:00Z",
      updatedAt: "2023-02-27T12:00:00Z",
    },
    {
      id: 28,
      title: "RESTful API 개요",
      description: "RESTful API의 기본 개념을 배우는 강의입니다.",
      materials: [34],
      createdAt: "2023-02-28T12:00:00Z",
      updatedAt: "2023-02-28T12:00:00Z",
    },
    {
      id: 29,
      title: "GraphQL 개요",
      description: "GraphQL의 기본 개념을 배우는 강의입니다.",
      materials: [35, 73],
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 30,
      title: "UX/UI 디자인 기초",
      description: "UX/UI 디자인의 기본 원칙과 기법을 배우는 과정입니다.",
      materials: [36, 74, 75],
      createdAt: "2023-03-02T12:00:00Z",
      updatedAt: "2023-03-02T12:00:00Z",
    },
    {
      id: 31,
      title: "디자인 도구 사용법",
      description: "디자인 도구의 기본 사용법을 배우는 과정입니다.",
      materials: [37],
      createdAt: "2023-03-03T12:00:00Z",
      updatedAt: "2023-03-03T12:00:00Z",
    },
    {
      id: 32,
      title: "기계 학습 실습",
      description: "기계 학습의 기본 개념을 실습하는 강의입니다.",
      materials: [38, 49, 76, 90],
      createdAt: "2023-03-04T12:00:00Z",
      updatedAt: "2023-03-04T12:00:00Z",
    },
    {
      id: 33,
      title: "딥러닝 실습",
      description: "딥러닝의 기본 개념을 실습하는 강의입니다.",
      materials: [39, 50, 77],
      createdAt: "2023-03-05T12:00:00Z",
      updatedAt: "2023-03-05T12:00:00Z",
    },
    {
      id: 34,
      title: "리눅스 기초",
      description: "리눅스 운영체제의 기본 개념과 명령어를 배우는 강의입니다.",
      materials: [84, 85, 78, 101],
      createdAt: "2023-03-06T12:00:00Z",
      updatedAt: "2023-03-06T12:00:00Z",
    },
    {
      id: 35,
      title: "Python 라이브러리 사용법",
      description: "Python에서 유용한 라이브러리 사용법을 배우는 강의입니다.",
      materials: [86, 87, 79, 80],
      createdAt: "2023-03-07T12:00:00Z",
      updatedAt: "2023-03-07T12:00:00Z",
    },
    {
      id: 36,
      title: "C++ 기초",
      description: "C++ 프로그래밍 언어의 기초를 배웁니다.",
      materials: [88, 89],
      createdAt: "2023-03-08T12:00:00Z",
      updatedAt: "2023-03-08T12:00:00Z",
    },
    {
      id: 37,
      title: "Java 기초",
      description: "Java 프로그래밍 언어의 기초를 배웁니다.",
      materials: [90, 91],
      createdAt: "2023-03-09T12:00:00Z",
      updatedAt: "2023-03-09T12:00:00Z",
    },
    {
      id: 38,
      title: "SQL 기초",
      description: "SQL의 기본 개념을 배우는 과정입니다.",
      materials: [42, 94],
      createdAt: "2023-03-10T12:00:00Z",
      updatedAt: "2023-03-10T12:00:00Z",
    },
    {
      id: 39,
      title: "데이터베이스 설계",
      description: "효율적인 데이터베이스 설계 기법을 배우는 강의입니다.",
      materials: [43, 56, 95],
      createdAt: "2023-03-11T12:00:00Z",
      updatedAt: "2023-03-11T12:00:00Z",
    },
    {
      id: 40,
      title: "블록체인 심화",
      description: "블록체인의 심화 개념을 배우는 강의입니다.",
      materials: [],
      createdAt: "2023-03-12T12:00:00Z",
      updatedAt: "2023-03-12T12:00:00Z",
    },
    {
      id: 41,
      title: "사물인터넷 심화",
      description: "사물인터넷의 심화 개념을 배우는 강의입니다.",
      materials: [],
      createdAt: "2023-03-13T12:00:00Z",
      updatedAt: "2023-03-13T12:00:00Z",
    },
    {
      id: 42,
      title: "API 보안",
      description: "API 보안의 기본 개념과 방법을 배우는 강의입니다.",
      materials: [44, 57, 71, 72, 83, 84, 87, 89, 96],
      createdAt: "2023-03-14T12:00:00Z",
      updatedAt: "2023-03-14T12:00:00Z",
    },
    {
      id: 43,
      title: "클라우드 컴퓨팅 기초",
      description: "클라우드 컴퓨팅의 기본 개념을 배우는 강의입니다.",
      materials: [45, 58, 70, 81, 85, 86, 97, 105],
      createdAt: "2023-03-15T12:00:00Z",
      updatedAt: "2023-03-15T12:00:00Z",
    },
    {
      id: 44,
      title: "DevOps 심화",
      description: "DevOps의 심화 개념을 배우는 강의입니다.",
      materials: [46, 47, 48, 59, 60, 61, 82, 88, 98, 99, 100],
      createdAt: "2023-03-16T12:00:00Z",
      updatedAt: "2023-03-16T12:00:00Z",
    },
  ],
  materials: [
    {
      id: 1,
      title: "HTML 소개",
      content: "HTML의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 2,
      title: "HTML 태그 설명",
      content: "각종 HTML 태그의 사용법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 3,
      title: "CSS 소개",
      content: "CSS의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 4,
      title: "CSS 선택자",
      content: "CSS 선택자의 종류와 사용법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 5,
      title: "CSS 박스 모델",
      content: "CSS의 박스 모델 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 6,
      title: "JavaScript 소개",
      content: "JavaScript의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 7,
      title: "JavaScript 변수",
      content: "JavaScript에서 변수를 선언하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 8,
      title: "JavaScript 함수",
      content: "JavaScript 함수의 기본 구조를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 9,
      title: "JavaScript DOM 조작",
      content: "JavaScript로 DOM을 조작하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 10,
      title: "JavaScript 오류 처리",
      content: "JavaScript에서 오류를 처리하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 11,
      title: "React.js 소개",
      content: "React.js의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 12,
      title: "React.js 컴포넌트",
      content: "React.js의 컴포넌트 구조를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 13,
      title: "React.js Props",
      content: "React.js에서 Props의 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 14,
      title: "React.js State",
      content: "React.js에서 State의 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 15,
      title: "Python 소개",
      content: "Python의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 16,
      title: "Python 자료형",
      content: "Python의 자료형을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 17,
      title: "Python 함수",
      content: "Python 함수의 기본 구조를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 18,
      title: "Pandas 소개",
      content: "Pandas의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 19,
      title: "Pandas 데이터프레임",
      content: "Pandas 데이터프레임의 기본 사용법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 20,
      title: "안드로이드 앱 개요",
      content: "안드로이드 앱 개발의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 21,
      title: "안드로이드 레이아웃",
      content: "안드로이드 앱의 레이아웃을 구성하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 22,
      title: "iOS 앱 개요",
      content: "iOS 앱 개발의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 23,
      title: "iOS 레이아웃",
      content: "iOS 앱의 레이아웃을 구성하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 24,
      title: "AWS EC2 소개",
      content: "AWS EC2의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 25,
      title: "AWS S3 소개",
      content: "AWS S3의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 26,
      title: "기계 학습 개요",
      content: "기계 학습의 기본 개념과 알고리즘을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 27,
      title: "딥러닝 개요",
      content: "딥러닝의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 28,
      title: "Unity 소개",
      content: "Unity의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 29,
      title: "C# 소개",
      content: "C#의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 30,
      title: "게임 디자인 원칙",
      content: "게임 디자인의 기본 원칙을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 31,
      title: "IoT 개요",
      content: "사물인터넷의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 32,
      title: "블록체인 개요",
      content: "블록체인의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 33,
      title: "API 개요",
      content: "API의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 34,
      title: "RESTful API 개요",
      content: "RESTful API의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 35,
      title: "GraphQL 개요",
      content: "GraphQL의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 36,
      title: "UX/UI 디자인 원칙",
      content: "UX/UI 디자인의 기본 원칙을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 37,
      title: "디자인 도구 사용법",
      content: "디자인 도구의 기본 사용법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 38,
      title: "기계 학습 모델 평가",
      content: "기계 학습 모델 평가 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 39,
      title: "딥러닝 신경망 구조",
      content: "딥러닝 신경망의 기본 구조를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 40,
      title: "Unity 기본 사용법",
      content: "Unity의 기본 사용법을 배우는 강의입니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 41,
      title: "C# 기본 문법",
      content: "C#의 기본 문법을 배우는 강의입니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 42,
      title: "SQL 기본 쿼리",
      content: "SQL에서 기본 쿼리를 작성하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 43,
      title: "데이터베이스 정규화",
      content: "데이터베이스 정규화의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 44,
      title: "API 인증",
      content: "API에서 인증을 처리하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 45,
      title: "클라우드 서비스 유형",
      content: "주요 클라우드 서비스의 유형을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 46,
      title: "DevOps 도구 소개",
      content: "DevOps에서 사용하는 주요 도구를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 47,
      title: "사이버 보안 기본 개념",
      content: "사이버 보안의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 48,
      title: "사이버 공격 유형",
      content: "주요 사이버 공격 유형을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 49,
      title: "기계 학습 응용 분야",
      content: "기계 학습의 주요 응용 분야를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 50,
      title: "딥러닝 응용 분야",
      content: "딥러닝의 주요 응용 분야를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 51,
      title: "HTML5의 새로운 기능",
      content: "HTML5에서 추가된 새로운 기능을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 52,
      title: "CSS Flexbox 설명",
      content: "CSS Flexbox의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 53,
      title: "CSS Grid 설명",
      content: "CSS Grid의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 54,
      title: "JavaScript ES6 기능",
      content: "JavaScript ES6의 주요 기능을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 55,
      title: "Python 웹 프레임워크",
      content: "Python의 주요 웹 프레임워크를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 56,
      title: "데이터베이스 쿼리 최적화",
      content: "데이터베이스 쿼리 최적화 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 57,
      title: "API 테스트",
      content: "API 테스트의 중요성을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 58,
      title: "클라우드 배포",
      content: "클라우드 환경에서의 배포 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 59,
      title: "DevOps CI/CD",
      content: "DevOps에서 CI/CD의 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 60,
      title: "사이버 보안 사고 대응",
      content: "사이버 보안 사고 발생 시 대응 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 61,
      title: "기술 동향",
      content: "현재의 기술 동향과 미래 예측을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 62,
      title: "HTML5로 웹 페이지 만들기",
      content: "HTML5를 사용하여 웹 페이지를 만드는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 63,
      title: "CSS로 스타일링",
      content: "CSS를 사용하여 웹 페이지를 스타일링하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 64,
      title: "JavaScript의 비동기 프로그래밍",
      content: "JavaScript의 비동기 프로그래밍 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 65,
      title: "React.js의 컴포넌트 생명주기",
      content: "React.js 컴포넌트의 생명주기를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 66,
      title: "Python의 객체지향 프로그래밍",
      content: "Python의 객체지향 프로그래밍 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 67,
      title: "Pandas의 데이터 시각화",
      content: "Pandas를 사용하여 데이터를 시각화하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 68,
      title: "안드로이드 앱 성능 최적화",
      content: "안드로이드 앱의 성능 최적화 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 69,
      title: "iOS 앱 성능 최적화",
      content: "iOS 앱의 성능 최적화 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 70,
      title: "다양한 클라우드 서비스",
      content: "다양한 클라우드 서비스의 종류를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 71,
      title: "API의 기본 구조",
      content: "API의 기본 구조와 작동 원리를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 72,
      title: "RESTful API 설계 원칙",
      content: "RESTful API 설계의 기본 원칙을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 73,
      title: "GraphQL 쿼리 작성법",
      content: "GraphQL에서 쿼리를 작성하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 74,
      title: "UX 디자인 프로세스",
      content: "UX 디자인의 기본 프로세스를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 75,
      title: "UI 디자인 원칙",
      content: "UI 디자인의 기본 원칙을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 76,
      title: "기계 학습 실습",
      content: "기계 학습의 기본 개념을 실습하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 77,
      title: "딥러닝 실습",
      content: "딥러닝의 기본 개념을 실습하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 78,
      title: "리눅스 기본 명령어",
      content: "리눅스에서 사용하는 기본 명령어를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 79,
      title: "Jupyter Notebook 사용법",
      content: "Jupyter Notebook을 사용하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 80,
      title: "데이터 시각화 도구",
      content: "주요 데이터 시각화 도구를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 81,
      title: "클라우드 스토리지 개요",
      content: "클라우드 스토리지의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 82,
      title: "DevOps CI/CD 기본 개념",
      content: "DevOps CI/CD의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 83,
      title: "사이버 보안 기술",
      content: "주요 사이버 보안 기술을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 84,
      title: "사이버 보안 사고 대응",
      content: "사이버 보안 사고 발생 시 대응 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 85,
      title: "기술 동향",
      content: "현재의 기술 동향과 미래 예측을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 86,
      title: "클라우드 컴퓨팅 개요",
      content: "클라우드 컴퓨팅의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 87,
      title: "API 설계 원칙",
      content: "효율적인 API 설계 원칙을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 88,
      title: "DevOps 문화",
      content: "DevOps 문화의 중요성을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 89,
      title: "사이버 공격 유형",
      content: "주요 사이버 공격 유형을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 90,
      title: "기계 학습 모델 평가",
      content: "기계 학습 모델 평가 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 91,
      title: "딥러닝 개요",
      content: "딥러닝의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 92,
      title: "Unity 기본 사용법",
      content: "Unity의 기본 사용법을 배우는 강의입니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 93,
      title: "C# 기본 문법",
      content: "C#의 기본 문법을 배우는 강의입니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 94,
      title: "SQL 기본 쿼리",
      content: "SQL에서 기본 쿼리를 작성하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 95,
      title: "데이터베이스 정규화",
      content: "데이터베이스 정규화의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 96,
      title: "API 인증",
      content: "API에서 인증을 처리하는 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 97,
      title: "클라우드 서비스 유형",
      content: "주요 클라우드 서비스의 유형을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 98,
      title: "DevOps CI/CD",
      content: "DevOps CI/CD의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 99,
      title: "사이버 보안 기본 개념",
      content: "사이버 보안의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 100,
      title: "사이버 보안 사고 대응",
      content: "사이버 보안 사고 발생 시 대응 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 101,
      title: "리눅스 기본 명령어",
      content: "리눅스에서 사용하는 기본 명령어를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 102,
      title: "Docker 기본 개념",
      content: "Docker의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 103,
      title: "Kubernetes 소개",
      content: "Kubernetes의 기본 개념을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 104,
      title: "API 테스트 도구",
      content: "주요 API 테스트 도구를 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
    {
      id: 105,
      title: "클라우드 배포 방법",
      content: "클라우드 환경에서의 배포 방법을 설명합니다.",
      createdAt: "2023-03-01T12:00:00Z",
      updatedAt: "2023-03-01T12:00:00Z",
    },
  ],
};

const insertData = async () => {
  try {
    // MongoDB 연결
    await dbConnect();
    console.log("MongoDB connected");

    await MaterialModel.deleteMany({});
    console.log("Materials collection cleared");

    await LectureModel.deleteMany({});
    console.log("Lectures collection cleared");

    await CourseModel.deleteMany({});
    console.log("Courses collection cleared");

    await RoadmapModel.deleteMany({});
    console.log("Roadmaps collection cleared");

    // Step 1: Material 데이터 삽입
    const materialMap = new Map<number, string>();
    for (const material of data.materials) {
      const createdMaterial = await MaterialModel.create({
        title: material.title,
        content: material.content,
      });
      materialMap.set(material.id, createdMaterial._id as string);
    }
    console.log("Materials inserted");

    // Step 2: Lecture 데이터 삽입
    const lectureMap = new Map<number, string>();
    for (const lecture of data.lectures) {
      const lectureMaterials = lecture.materials.map((id) =>
        materialMap.get(id)
      );
      const createdLecture = await LectureModel.create({
        title: lecture.title,
        description: lecture.description,
        materials: lectureMaterials,
      });
      lectureMap.set(lecture.id, createdLecture._id as string);
    }
    console.log("Lectures inserted");

    // Step 3: Course 데이터 삽입
    const courseMap = new Map<number, string>();
    for (const course of data.courses) {
      const courseLectures = course.lectures.map((id) => lectureMap.get(id));
      const createdCourse = await CourseModel.create({
        title: course.title,
        description: course.description,
        lectures: courseLectures,
      });
      courseMap.set(course.id, createdCourse._id as string);
    }
    console.log("Courses inserted");

    // Step 4: Roadmap 데이터 삽입
    for (const roadmap of data.roadmaps) {
      const roadmapCourses = roadmap.courses.map((id) => courseMap.get(id));
      const createdRoadmap = await RoadmapModel.create({
        title: roadmap.title,
        description: roadmap.description,
        courses: roadmapCourses,
      });
      for (const courseId of roadmapCourses) {
        const foundCourse = await CourseModel.findById(courseId);
        if (foundCourse) {
          foundCourse.roadmaps.push(createdRoadmap);
          await foundCourse.save();
        }
      }
    }
    console.log("Roadmaps inserted");

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

// 실행
insertData();
