function Industry() {
  return (
    // <div className="ReactModalPortal">
    //   <div
    //     className="ReactModal__Overlay ReactModal__Overlay--after-open"
    //     style="position: fixed; inset: 0px; background-color: rgba(0, 0, 0, 0.7); overflow: auto; z-index: 30; display: flex; align-items: center; justify-content: center;"
    //   >
    //     <div
    //       className="ReactModal__Content ReactModal__Content--after-open"
    //       tabindex="-1"
    //       role="dialog"
    //       aria-modal="true"
    //       style="position: static; inset: 40px; border: 0px; background: rgb(255, 255, 255); overflow: auto; border-radius: 4px; outline: none; padding: 0px; max-width: 500px; width: 560px; max-height: calc(100% - 48px); height: 640px;"
    //     >
    //       <div className="tw-flex tw-flex-col tw-gap-5 tw-px-5 tw-pt-8">
    //         <div className="tw-flex tw-flex-col tw-gap-6 tw-min-h-[30rem]">
    //           <h4 className="tw-mb-0">산업 분야를 선택해 주세요</h4>
    //           <div className="tw-grid tw-grid-cols-2 tw-flex-wrap tw-items-start tw-justify-start">
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-1"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-1"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 B2B
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-2"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-2"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 SaaS
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-3"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-3"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 플랫폼
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-4"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-4"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 이커머스
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-5"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-5"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 커뮤니티 / 소셜네트워킹
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-6"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-6"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 HR
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-7"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-7"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 금융 / 핀테크
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-8"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-8"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 교육 / 에듀테크
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-9"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-9"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 여행
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-10"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-10"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 콘텐츠
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-11"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-11"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 라이프스타일
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-12"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-12"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 의료 / 헬스케어
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-13"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-13"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 패션 / 뷰티
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-14"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-14"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 블록체인
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-15"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-15"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 AI
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-16"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-16"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 모빌리티 / 교통
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-17"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-17"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 게임
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-18"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-18"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 식음료
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-19"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-19"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 반려동물
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-20"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-20"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 유아
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-21"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-21"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 스포츠
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-22"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-22"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 법률
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-23"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-23"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 광고 / 마케팅
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-24"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-24"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 주거 / 부동산 / 프롭테크
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-25"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-25"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 보안
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-26"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-26"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 제조
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-27"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-27"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 방송 / 엔터테인먼트
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-28"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-28"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 농축수산업 / 애그테크
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-29"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-29"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 전자제품
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-30"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-30"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 정부 / 공공
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-31"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-31"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 건설
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-32"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-32"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 환경 / 에너지
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-33"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-33"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 물류 / 유통
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-34"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-34"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 반도체
    //               </label>
    //             </div>
    //             <div className="tw-flex tw-py-4 tw-pr-4 tw-gap-2">
    //               <input
    //                 type="checkbox"
    //                 id="industry-checkbox-35"
    //                 className="tw-custom-checkbox"
    //               />
    //               <label
    //                 for="industry-checkbox-35"
    //                 className="tw-pl-2 tw-w-full tw-mb-0 tw-cursor-pointer tw-text-sm tw-font-normal tw-text-slate-900"
    //               >
    //                 컨설팅
    //               </label>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="tw-flex tw-gap-x-4 tw-bg-white tw-sticky tw-bottom-0 tw-pb-5">
    //           <button
    //             type="button"
    //             className="tw-inline-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-bg-color-background-button-primary-tint-enabled hover:tw-bg-color-background-button-primary-tint-hover tw-text-color-slate-700 tw-border-color-slate-100 tw-text-base tw-px-4 tw-py-3 tw-rounded tw-font-bold tw-grow  focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-offset-2 focus-visible:tw-ring-color-slate-500"
    //           >
    //             <span className="tw-text-ellipsis tw-line-clamp-1 ">취소</span>
    //           </button>
    //           <button
    //             type="button"
    //             className="tw-inline-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-bg-color-background-button-primary-bold-enabled hover:tw-bg-color-background-button-primary-bold-hover tw-text-color-white tw-border-color-slate-700 tw-text-base tw-px-4 tw-py-3 tw-rounded tw-font-bold tw-grow  focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-offset-2 focus-visible:tw-ring-color-slate-500"
    //           >
    //             <span className="tw-text-ellipsis tw-line-clamp-1 ">확인</span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <></>
  );
}
export default Industry