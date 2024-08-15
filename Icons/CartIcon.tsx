import React from 'react';

export const CartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="2em"
    width="2em"
  >
    <path d="M8 1a2 2 0 00-2 2v2H5V3a3 3 0 116 0v2h-1V3a2 2 0 00-2-2zM5 5H3.36a1.5 1.5 0 00-1.483 1.277L.85 13.13A2.5 2.5 0 003.322 16h9.355a2.5 2.5 0 002.473-2.87l-1.028-6.853A1.5 1.5 0 0012.64 5H11v1.5a.5.5 0 01-1 0V5H6v1.5a.5.5 0 01-1 0V5z" />
  </svg>
);

export const ClosedIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  height="1em"
  width="1em"
  >
  <path d="M13.41 12l4.3-4.29a1 1 0 10-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 000 1.42 1 1 0 001.42 0l4.29-4.3 4.29 4.3a1 1 0 001.42 0 1 1 0 000-1.42z" />
  </svg>
);


export const DecreaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
  viewBox="0 0 1024 1024"
  fill="currentColor"
  height="1em"
  width="1em"
>
  <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
</svg>
);



export const DeleteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  height="1em"
  width="1em"
>
  <path fill="none" d="M0 0h24v24H0z" />
  <path d="M17 6h5v2h-2v13a1 1 0 01-1 1H5a1 1 0 01-1-1V8H2V6h5V3a1 1 0 011-1h8a1 1 0 011 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
</svg>
);


export const FilterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path></svg>
);


export const IncreaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
  viewBox="0 0 1024 1024"
  fill="currentColor"
  height="1em"
  width="1em"
>
  <defs>
    <style />
  </defs>
  <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
  <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
</svg>
);


export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="2rem" height="2rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.44578C10.1205 1.44578 10.4096 1.44578 11.2771 1.44578C12.0482 1.44578 12.4337 1.63855 12.7229 1.73494C13.1084 1.92771 13.3976 2.0241 13.6867 2.31325C13.9759 2.60241 14.1687 2.89157 14.2651 3.27711C14.3614 3.56627 14.4578 3.95181 14.5542 4.72289C14.5542 5.59036 14.5542 5.78313 14.5542 8C14.5542 10.2169 14.5542 10.4096 14.5542 11.2771C14.5542 12.0482 14.3614 12.4337 14.2651 12.7229C14.0723 13.1084 13.9759 13.3976 13.6867 13.6867C13.3976 13.9759 13.1084 14.1687 12.7229 14.2651C12.4337 14.3614 12.0482 14.4578 11.2771 14.5542C10.4096 14.5542 10.2169 14.5542 8 14.5542C5.78313 14.5542 5.59036 14.5542 4.72289 14.5542C3.95181 14.5542 3.56627 14.3614 3.27711 14.2651C2.89157 14.0723 2.60241 13.9759 2.31325 13.6867C2.0241 13.3976 1.83133 13.1084 1.73494 12.7229C1.63855 12.4337 1.54217 12.0482 1.44578 11.2771C1.44578 10.4096 1.44578 10.2169 1.44578 8C1.44578 5.78313 1.44578 5.59036 1.44578 4.72289C1.44578 3.95181 1.63855 3.56627 1.73494 3.27711C1.92771 2.89157 2.0241 2.60241 2.31325 2.31325C2.60241 2.0241 2.89157 1.83133 3.27711 1.73494C3.56627 1.63855 3.95181 1.54217 4.72289 1.44578C5.59036 1.44578 5.87952 1.44578 8 1.44578ZM8 0C5.78313 0 5.59036 0 4.72289 0C3.85542 0 3.27711 0.192772 2.79518 0.385543C2.31325 0.578314 1.83133 0.867471 1.3494 1.3494C0.867471 1.83133 0.674699 2.21687 0.385543 2.79518C0.192772 3.27711 0.0963856 3.85542 0 4.72289C0 5.59036 0 5.87952 0 8C0 10.2169 0 10.4096 0 11.2771C0 12.1446 0.192772 12.7229 0.385543 13.2048C0.578314 13.6867 0.867471 14.1687 1.3494 14.6506C1.83133 15.1325 2.21687 15.3253 2.79518 15.6145C3.27711 15.8072 3.85542 15.9036 4.72289 16C5.59036 16 5.87952 16 8 16C10.1205 16 10.4096 16 11.2771 16C12.1446 16 12.7229 15.8072 13.2048 15.6145C13.6867 15.4217 14.1687 15.1325 14.6506 14.6506C15.1325 14.1687 15.3253 13.7831 15.6145 13.2048C15.8072 12.7229 15.9036 12.1446 16 11.2771C16 10.4096 16 10.1205 16 8C16 5.87952 16 5.59036 16 4.72289C16 3.85542 15.8072 3.27711 15.6145 2.79518C15.4217 2.31325 15.1325 1.83133 14.6506 1.3494C14.1687 0.867471 13.7831 0.674699 13.2048 0.385543C12.7229 0.192772 12.1446 0.0963856 11.2771 0C10.4096 0 10.2169 0 8 0Z" fill="#1b1b1b"></path><path d="M8 3.85542C5.68675 3.85542 3.85542 5.68675 3.85542 8C3.85542 10.3133 5.68675 12.1446 8 12.1446C10.3133 12.1446 12.1446 10.3133 12.1446 8C12.1446 5.68675 10.3133 3.85542 8 3.85542ZM8 10.6988C6.55422 10.6988 5.30121 9.54217 5.30121 8C5.30121 6.55422 6.45783 5.30121 8 5.30121C9.44578 5.30121 10.6988 6.45783 10.6988 8C10.6988 9.44578 9.44578 10.6988 8 10.6988Z" fill="#1b1b1b"></path><path d="M12.241 4.72289C12.7733 4.72289 13.2048 4.29136 13.2048 3.75904C13.2048 3.22671 12.7733 2.79518 12.241 2.79518C11.7086 2.79518 11.2771 3.22671 11.2771 3.75904C11.2771 4.29136 11.7086 4.72289 12.241 4.72289Z" fill="#1b1b1b" ></path></svg>
);


export const LessIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
  <path
    fill="currentColor"
    d="M3 9a1 1 0 000 2h18a1 1 0 100-2H3zM3 13a1 1 0 100 2h12a1 1 0 100-2H3z"
  />
  </svg>
);



export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="2rem" height="2rem" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.6208 16.2257C20.2859 16.0584 18.6381 15.2525 18.3313 15.1402C18.0234 15.0291 17.8001 14.9741 17.5757 15.3086C17.3535 15.642 16.7106 16.3929 16.5155 16.6152C16.3204 16.8385 16.1241 16.8655 15.7892 16.6993C15.4542 16.531 14.3737 16.1796 13.0936 15.0437C12.0977 14.1592 11.4244 13.067 11.2293 12.7325C11.0342 12.3991 11.209 12.2184 11.3759 12.0523C11.5271 11.903 11.712 11.6628 11.8789 11.4686C12.047 11.2732 12.1023 11.1341 12.215 10.9107C12.3267 10.6884 12.2714 10.4942 12.1868 10.327C12.1023 10.1597 11.4323 8.51755 11.1537 7.84967C10.8808 7.19975 10.6045 7.28843 10.3992 7.2772C10.185 7.26871 9.9707 7.26497 9.75635 7.26598C9.53304 7.26598 9.16987 7.34904 8.8631 7.68354C8.55633 8.01692 7.69015 8.82399 7.69015 10.4662C7.69015 12.1073 8.8913 13.6933 9.05822 13.9167C9.22627 14.139 11.4222 17.5087 14.7843 18.9533C15.5839 19.2968 16.2076 19.5022 16.6948 19.6548C17.4979 19.9096 18.2287 19.8737 18.805 19.7873C19.449 19.6919 20.7878 18.9802 21.0675 18.2012C21.3472 17.4222 21.3472 16.7543 21.2626 16.6152C21.1791 16.476 20.9569 16.3929 20.6208 16.2257ZM14.5057 24.5354H14.5012C12.5046 24.5356 10.5448 24.0013 8.82701 22.9886L8.41986 22.7484L4.20061 23.8507L5.32619 19.7559L5.06115 19.3361C3.94508 17.5673 3.35466 15.5204 3.35811 13.4318C3.35924 7.31425 8.36121 2.33715 14.5102 2.33715C17.4877 2.33715 20.287 3.49331 22.3916 5.59011C23.4299 6.619 24.253 7.84263 24.813 9.19019C25.3731 10.5378 25.6591 11.9825 25.6544 13.4408C25.651 19.5583 20.6502 24.5354 14.5057 24.5354ZM23.9942 3.9973C22.7516 2.75238 21.273 1.76528 19.6442 1.09321C18.0155 0.421139 16.2689 0.0774557 14.5057 0.0820772C7.11269 0.0820772 1.09566 6.07053 1.09228 13.4307C1.09228 15.7834 1.70921 18.08 2.88329 20.1038L0.979492 27.0217L8.09053 25.1651C10.057 26.2314 12.2607 26.7902 14.5001 26.7905H14.5057C21.8976 26.7905 27.9157 20.802 27.9191 13.4408C27.9246 11.6866 27.5805 9.94883 26.9068 8.32789C26.2331 6.70694 25.2431 5.23503 23.9942 3.9973Z" fill="#1b1b1b"></path></svg>
);
