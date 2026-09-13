"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToolItem {
  id: string;
  name: string;
  category: "paid" | "data" | "seo" | "cro";
  categoryLabel: string;
  typeLabel: string;
  badge: string;
  description: string;
  tags: string[];
  statusText: string;
  statusActive?: boolean;
  icon: React.ReactNode;
}

// Official Authentic SVG Icons
const MetaIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="metaToolGrad" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#0064E0"/>
        <stop offset="45%" stopColor="#0072F5"/>
        <stop offset="85%" stopColor="#0081FB"/>
        <stop offset="100%" stopColor="#0064E0"/>
      </linearGradient>
    </defs>
    <path fill="url(#metaToolGrad)" d="M23.6 7.6c-2.6 0-4.8 1.4-6.4 3.4-1.6-2-3.8-3.4-6.4-3.4C6 7.6 2 11.6 2 16.8c0 5.2 4 9.2 8.8 9.2 2.6 0 4.8-1.4 6.4-3.4 1.6 2 3.8 3.4 6.4 3.4 4.8 0 8.8-4 8.8-9.2 0-5.2-4-9.2-8.8-9.2zm-12.8 15c-3.1 0-5.4-2.5-5.4-5.8s2.3-5.8 5.4-5.8c2.2 0 4.2 1.8 5.4 4.6-1.2 2.8-3.2 7-5.4 7zm12.8 0c-2.2 0-4.2-4.2-5.4-7 1.2-2.8 3.2-4.6 5.4-4.6 3.1 0 5.4 2.5 5.4 5.8s-2.3 5.8-5.4 5.8z"/>
  </svg>
);

/*
 * Official/current product-style icons
 * Drop-in replacement for the existing icon components.
 *
 * All components intentionally keep the same names as the
 * existing implementation so no other imports/usages need
 * to change.
 */

const IconProps = {
  className: "w-6 h-6",
};

/* =========================================================
   GOOGLE ADS
   ========================================================= */

const GoogleAdsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 256 230"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fill="#FBBC04"
      d="M5.888 166.405L90.88 20.9c10.796 6.356 65.236 36.484 74.028 42.214L79.916 208.627c-9.295 12.28-85.804-23.587-74.028-42.23z"
    />
    <path
      fill="#4285F4"
      d="M250.084 166.402L165.092 20.906C153.21 1.132 127.62-6.054 106.601 5.625S79.182 42.462 91.064 63.119l84.992 145.514c11.882 19.765 37.473 26.95 58.492 15.272c20.1-11.68 27.418-37.73 15.536-57.486z"
    />
    <ellipse cx="42.664" cy="187.924" fill="#34A853" rx="42.664" ry="41.604" />
  </svg>
);


/* =========================================================
   GOOGLE ANALYTICS 4
   ========================================================= */

const GA4Icon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M22.84 2.998v17.999c.009 1.647-1.32 2.99-2.967 2.998a2.98 2.98 0 0 1-.368-.02c-1.528-.227-2.648-1.557-2.61-3.101V3.12c-.038-1.545 1.085-2.876 2.615-3.1 1.636-.191 3.118.98 3.31 2.616.014.12.02.24.02.362Z"
      fill="#F9AB00"
    />
    <path
      d="M12.005 9.045c-.017 0-.034 0-.051 0-1.65.09-2.93 1.474-2.891 3.126v7.985c0 2.166.953 3.482 2.35 3.762 1.612.327 3.184-.715 3.51-2.327.04-.197.06-.398.06-.6v-8.958c.003-1.647-1.33-2.985-2.978-2.988Z"
      fill="#E37400"
    />
    <circle cx="4.133" cy="21.027" r="2.973" fill="#F9AB00" />
  </svg>
);


/* =========================================================
   GOOGLE TAG MANAGER
   ========================================================= */

const GTMIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12.003 0a3 3 0 0 0-2.121 5.121l6.865 6.865-4.446 4.541 1.745 1.836a3.432 3.432 0 0 1 .7.739l.012.011-.001.002a3.432 3.432 0 0 1 .609 1.953 3.432 3.432 0 0 1-.09.78l7.75-7.647c.031-.029.067-.05.098-.08.023-.023.038-.052.06-.076a2.994 2.994 0 0 0-.06-4.166l-9-9A2.99 2.99 0 0 0 12.003 0Z"
      fill="#246FDB"
    />
    <path
      d="M8.63 2.133L.88 9.809a2.998 2.998 0 0 0 0 4.238l7.7 7.75a3.432 3.432 0 0 1-.077-.729 3.432 3.432 0 0 1 3.431-3.431 3.432 3.432 0 0 1 .826.101l-5.523-5.81 4.371-4.373-2.08-2.08c-.903-.904-1.193-2.183-.898-3.342Z"
      fill="#4285F4"
    />
    <circle cx="11.934" cy="21.069" r="2.932" fill="#8AB4F8" />
  </svg>
);


/* =========================================================
   GOOGLE SEARCH CONSOLE
   ========================================================= */

const GSCIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="m11.081 30.527-4.72 4.721a.933.933 0 0 1-1.317 0l-.292-.292a.933.933 0 0 1 0-1.316l4.72-4.721a.933.933 0 0 1 1.318 0l.291.291a.93.93 0 0 1 0 1.317Z"
      fill="#FBBC04"
    />
    <path
      d="M23.75 32.5h6.042a6.04 6.04 0 0 0 6.041-6.042v-16.25a6.04 6.04 0 0 0-6.041-6.041 6.04 6.04 0 0 0-6.042 6.041Z"
      fill="#4285F4"
    />
    <path
      d="M13.75 32.5a6.04 6.04 0 0 0 6.042-6.042 6.04 6.04 0 0 0-6.042-6.041 6.04 6.04 0 0 0-6.042 6.041 6.04 6.04 0 0 0 6.042 6.042Z"
      fill="#FBBC04"
    />
    <path
      d="M27.97 32.5h-5.887a6.04 6.04 0 0 1-6.041-6.042v-7.916a6.04 6.04 0 0 1 6.041-6.042a6.04 6.04 0 0 1 6.042 6.042v13.804a.154.154 0 0 1-.154.154Z"
      fill="#34A853"
    />
    <path
      d="M28.125 32.346V18.542a6.04 6.04 0 0 0-4.375-5.807V32.5h4.22a.154.154 0 0 0 .155-.154Z"
      fill="#1967D2"
    />
    <path
      d="M19.792 26.575a6.04 6.04 0 0 0-3.75-5.59v5.59c0 1.72.72 3.273 1.875 4.373a6.02 6.02 0 0 0 1.875-4.373Z"
      fill="#EA4335"
    />
  </svg>
);


/* =========================================================
   GOOGLE MERCHANT CENTER
   ========================================================= */

const GMCIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="gmcGrad" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#246FDB" />
        <stop offset="5.5%" stopColor="#2973DF" />
        <stop offset="28%" stopColor="#377DEB" />
        <stop offset="55%" stopColor="#3F83F2" />
        <stop offset="100%" stopColor="#4285F4" />
      </linearGradient>
    </defs>
    <path
      fill="#EA4335"
      d="M173.2 82.8c25 25 25 65.5 0 90.5-12.5 12.5-12.5 32.8 0 45.2 12.5 12.5 32.8 12.5 45.3 0 50-50 50-131 0-181z"
    />
    <path
      fill="url(#gmcGrad)"
      d="M218.4 37.5c-50-50-130.9-50-180.9 0s-50 131 0 181l45.3-45.2c-25-25-25-65.5 0-90.5s65.5-25 90.5 0c12.5 12.5 32.8 12.5 45.3 0 12.3-12.5 12.3-32.8-.2-45.3"
    />
    <path
      fill="#FBBC04"
      d="m218.4 218.5-45.3-45.2c-25 25-65.5 25-90.5 0l-45.3 45.2c50.2 50 131.1 50 181.1 0"
    />
    <path
      fill="#34A853"
      d="M37.5 173.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.8 0 45.3-32.7 12.5-45.2 0-12.5-32.8 0-45.3"
    />
  </svg>
);


/* =========================================================
   GOOGLE BUSINESS PROFILE
   ========================================================= */

const GBPIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M22 8.5c0 1.37-1.12 2.5-2.5 2.5S17 9.87 17 8.5c0 1.37-1.12 2.5-2.5 2.5S12 9.87 12 8.5c0 1.37-1.12 2.5-2.5 2.5S7 9.87 7 8.5C7 9.87 5.88 11 4.5 11S2 9.87 2 8.5l1.39-5.42S3.68 2 4.7 2h14.6c1.02 0 1.31 1.08 1.31 1.08L22 8.5Z"
      fill="#4285F4"
    />
    <path
      d="M21 12.2V20c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-7.8a3.96 3.96 0 0 0 4-.58c.69.55 1.56.88 2.5.88.95 0 1.82-.33 2.5-.88.69.55 1.56.88 2.5.88.95 0 1.82-.33 2.5-.88.68.55 1.56.88 2.5.88.53 0 1.04-.11 1.5-.3Z"
      fill="#1A73E8"
    />
    <path
      d="M17 17.33c0-.2 0-.41-.05-.63l-.03-.16h-2.97v1.17h1.81c-.06.22-.14.44-.31.62-.33.33-.78.51-1.26.51-.5 0-.99-.21-1.35-.56-.69-.71-.69-1.86.02-2.58.69-.7 1.83-.7 2.55-.03l.14.13.84-.85-.16-.14c-.56-.52-1.3-.81-2.08-.81h-.01c-.81 0-1.57.31-2.14.87-.59.58-.92 1.34-.92 2.13 0 .8.31 1.54.88 2.09a3.2 3.2 0 0 0 2.22.91h.02c.8 0 1.51-.29 2.03-.8.47-.48.77-1.2.77-1.87Z"
      fill="#FFFFFF"
    />
  </svg>
);


/* =========================================================
   SCREAMING FROG
   ========================================================= */

const ScreamingFrogIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M14.16 48.37c-.43 4.5-10 10.84-9.57 26.89s13.09 44.06 57.72 44.77c44.63.7 60.96-27.31 61.1-46.6.13-17.88-8.58-21.43-9.57-26.04-.84-3.94 6.76-21.96-10.28-28.44-20.11-7.65-27.6 11.68-28.16 12.1s-6.05.7-10.84.7-10 0-10.56-.56S41.19 11.2 23.45 19.36c-16.64 7.67-9.01 26.05-9.29 29.01Z"
      fill="#72B52D"
    />
    <path
      d="M103.08 42.36c0 5.29-3 9.76-8.02 9.57-4.33-.16-7.84-4.29-7.84-9.57s3.51-9.49 7.84-9.57c5.11-.1 8.02 4.28 8.02 9.57Zm-61.19-.75c.28 6.76-3 10.14-8.02 10.04-4.22-.08-7.56-3.19-7.65-9.67-.08-5.34 1.97-9.48 7.65-9.67 4.22-.13 7.8 3.97 8.02 9.3Z"
      fill="#1A1A1A"
    />
    <circle cx="95" cy="42" r="3" fill="#FFFFFF" />
    <circle cx="34" cy="42" r="3" fill="#FFFFFF" />
    <path
      d="M27.44 78.31l.38 2.72s10.51 10.98 35.85 11.36c26 .39 37.26-12.29 37.26-12.29l-11.64-5.63s-11.07 4.69-25.34 4.41-28.34-4.41-28.34-4.41Z"
      fill="#1A1A1A"
    />
    <path
      d="M36 78c10 4 20 5 28 5s18-1 28-5"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);


/* =========================================================
   AHREFS
   ========================================================= */

const AhrefsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M24 8v24h64v16l-26.104.456C26.8 51.712 16 60.08 16 84.96v6.512C16 110.536 30.328 120 48 120c7.984 0 16.32-1.56 25.04-5.976l14.96-6.024v12h24v-112H24Zm64 76-18.112 7.472C63.592 94.96 57.056 96.816 51.968 96.816c-6.288 0-11.968-1.136-11.968-8.816v-5.12c.48-8.136 7.376-11.176 26.256-13.032l21.744-1.848V84Z"
      fill="#FF8000"
    />
  </svg>
);


/* =========================================================
   SEMRUSH
   ========================================================= */

const SemrushIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002Zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002Zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114Z"
      fill="#FF642D"
    />
  </svg>
);


/* =========================================================
   PAGESPEED INSIGHTS
   ========================================================= */

const PageSpeedIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M22.363 1.636H1.635C.732 1.636 0 2.37 0 3.273L0 20.727c0 .903.733 1.634 1.635 1.634h20.73c.904 0 1.635-.734 1.635-1.637V3.273c.016-.89-.76-1.64-1.637-1.637ZM3.979 2.886c.492-.507 1.279.28.77.772a.544.544 0 0 1-.77-.772ZM1.8 2.89c.507-.509 1.28.265.772.771a.545.545 0 0 1-.772-.771Zm21.7 17.838c.012.611-.524 1.148-1.137 1.136H1.635A1.137 1.137 0 0 1 .5 20.727L.501 4.91H23.5v15.818Z"
      fill="#4285F4"
    />
    <path
      d="M11 16.159l5.946-4.577c.235-.2.576.129.389.372l-3.938 6.35a1.638 1.638 0 0 1-2.448.405c-.785-.668-.811-1.835.05-2.548Z"
      fill="#34A853"
    />
    <path
      d="M15.763 15.409c.09-.168 2.002-3.181 2.06-3.35 2.056 1.813 3.029 4.382 2.898 7.026h-3.819c.073-1.39-.29-2.678-1.139-3.676Z"
      fill="#FBBC04"
    />
    <path
      d="M7.084 19.085H3.278c-.357-7.022 7.148-11.735 13.39-7.92l-3.461 2.618c-3.3-.762-6.364 1.71-6.123 5.302Z"
      fill="#EA4335"
    />
  </svg>
);


/* =========================================================
   MICROSOFT CLARITY
   ========================================================= */

const ClarityIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="clarityGrad0"
        x1="11.794"
        y1="1.626"
        x2="11.794"
        y2="12.164"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="clarityGrad1"
        x1="10"
        y1="8.98"
        x2="19.221"
        y2="15.896"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2B7CD3" />
        <stop offset="1" stopColor="#185ABD" />
      </linearGradient>
      <linearGradient
        id="clarityGrad2"
        x1="2.646"
        y1="8.211"
        x2="20.802"
        y2="10.151"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185ABD" />
        <stop offset="1" stopColor="#103F91" />
      </linearGradient>
    </defs>
    <path
      d="M10 -1.009L14.483 6.675 3.725 9.749 10 -1.009Z"
      fill="#41A5EE"
    />
    <path
      d="M10 -1.009L14.483 6.675 3.725 9.749 10 -1.009Z"
      fill="url(#clarityGrad0)"
      fillOpacity="0.2"
    />
    <path
      d="M3.725 9.749L20.758 17.433 14.483 6.675 3.725 9.749Z"
      fill="url(#clarityGrad1)"
    />
    <path
      d="M20.758 17.433H-.758L3.725 9.749l17.033 7.684Z"
      fill="url(#clarityGrad2)"
    />
  </svg>
);


/* =========================================================
   HOTJAR
   ========================================================= */

const HotjarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10.119 9.814C12.899 8.27 16.704 6.155 16.704 0h-4.609c0 3.444-1.676 4.375-4.214 5.786C5.1 7.33 1.295 9.444 1.295 15.6h4.61c0-3.444 1.676-4.376 4.214-5.786ZM18.096 8.4c0 3.444-1.677 4.376-4.215 5.785-2.778 1.544-6.585 3.66-6.585 9.815h4.609c0-3.444 1.676-4.376 4.214-5.786 2.78-1.544 6.586-3.658 6.586-9.814h-4.609Z"
      fill="#FD3A5C"
    />
  </svg>
);


/* =========================================================
   LOOKER STUDIO
   ========================================================= */

const LookerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 256 239"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fill="#669DF6"
      d="M224.022 173.159h-92.959c-22.48 0-35.07 15.736-35.07 32.485 0 15.455 10.679 32.484 35.07 32.484h92.959Z"
    />
    <ellipse
      cx="224.022"
      cy="205.587"
      fill="#1A73E8"
      rx="31.979"
      ry="32.485"
    />
    <path
      fill="#669DF6"
      d="M128.028 86.551H35.07C12.59 86.551 0 102.288 0 119.036c0 15.456 10.678 32.485 35.07 32.485h92.958Z"
    />
    <ellipse
      cx="128.028"
      cy="119.036"
      fill="#1A73E8"
      rx="31.979"
      ry="32.485"
    />
    <path
      fill="#669DF6"
      d="M224.022 0h-92.959c-22.48 0-35.07 15.737-35.07 32.485 0 15.455 10.679 32.485 35.07 32.485h92.959Z"
    />
    <ellipse
      cx="224.022"
      cy="32.485"
      fill="#1A73E8"
      rx="31.979"
      ry="32.485"
    />
  </svg>
);

// =========================================================
// REUSABLE DESIGN SYSTEM ATOMS
// =========================================================

const ToolBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center h-6 px-2.5 rounded-md text-[11px] font-medium tracking-normal text-slate-600 bg-slate-100 border border-slate-200/80 select-none">
    {children}
  </span>
);

const ToolIcon = ({
  icon,
  isActive,
}: {
  icon: React.ReactNode;
  isActive?: boolean;
}) => (
  <div
    className={`w-11 h-11 rounded-xl flex items-center justify-center p-2 transition-colors duration-150 ${
      isActive
        ? "bg-blue-50 border border-blue-200 text-blue-600"
        : "bg-slate-50 border border-slate-200/80 text-slate-700 group-hover:bg-white group-hover:border-slate-300"
    }`}
  >
    <div className="w-6 h-6 flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6 [&>svg]:max-w-full [&>svg]:max-h-full">
      {icon}
    </div>
  </div>
);

const ToolTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium text-slate-600 bg-slate-100/80 border border-slate-200/60 leading-tight">
    {children}
  </span>
);

const ToolStatus = ({
  text,
  active = true,
}: {
  text: string;
  active?: boolean;
}) => (
  <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
    <span
      className={`w-1.5 h-1.5 rounded-full ${
        active ? "bg-emerald-500" : "bg-slate-400"
      }`}
    />
    <span className="truncate max-w-[110px] sm:max-w-none">{text}</span>
  </div>
);

const ToolAction = ({ isActive }: { isActive?: boolean }) => (
  <span
    className={`inline-flex items-center gap-1 text-xs font-semibold transition-colors duration-150 ${
      isActive ? "text-blue-600" : "text-slate-700 group-hover:text-blue-600"
    }`}
  >
    <span>Open Tool</span>
    <svg
      className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

// =========================================================
// ONE REUSABLE TOOLCARD COMPONENT
// =========================================================

interface ToolCardProps {
  tool: ToolItem;
  isActive: boolean;
  onSelect: (id: string) => void;
}

const ToolCard = ({ tool, isActive, onSelect }: ToolCardProps) => {
  return (
    <div
      onClick={() => onSelect(tool.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(tool.id);
        }
      }}
      className={`bg-white rounded-xl border p-6 flex flex-col justify-between text-left transition-colors duration-150 cursor-pointer ${
        isActive
          ? "border-[#046BD2] ring-1 ring-[#046BD2]"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <div className="flex flex-col gap-3.5">
        {/* Tool logo */}
        <div className="w-9 h-9 flex items-center justify-start">
          <ToolIcon icon={tool.icon} isActive={isActive} />
        </div>

        {/* Category in clean tracking-widest uppercase */}
        <div>
          <p className="text-[11px] font-bold tracking-widest text-[#046BD2] uppercase">
            {tool.categoryLabel}
          </p>
          <h3 className="text-base font-bold text-slate-900 leading-snug mt-1">
            {tool.name}
          </h3>
        </div>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
          {tool.description}
        </p>
      </div>

      {/* Footer text link */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046BD2] hover:text-[#0356A8] transition-colors">
          <span>Open Tool</span>
          <span className="text-sm">→</span>
        </span>
      </div>
    </div>
  );
};

// =========================================================
// REUSABLE TOOLGRID COMPONENT
// =========================================================

const ToolGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {children}
  </div>
);

// =========================================================
// NORMALIZED TOOLS DATA (STRICT UNIFORM SCHEMA)
// =========================================================

const allTools: ToolItem[] = [
  // --- PAID MEDIA ---
  {
    id: "google-ads",
    name: "Google Ads",
    category: "paid",
    categoryLabel: "Google Suite",
    typeLabel: "Paid Search & PMax",
    badge: "Core Platform",
    description:
      "Deploy high-intent Search, Shopping, and Performance Max campaigns to capture in-market customer demand.",
    tags: ["Smart Bidding", "PMax Scaling"],
    statusText: "Active Engine",
    icon: <GoogleAdsIcon />,
  },
  {
    id: "meta-ads",
    name: "Meta Ads Manager",
    category: "paid",
    categoryLabel: "Meta Suite",
    typeLabel: "Paid Social",
    badge: "Core Platform",
    description:
      "Scale customer acquisition across Facebook and Instagram using Advantage+ audience intelligence and creative testing.",
    tags: ["Advantage+", "Creative Testing"],
    statusText: "Active Engine",
    icon: <MetaIcon />,
  },
  {
    id: "google-merchant",
    name: "Google Merchant Center",
    category: "paid",
    categoryLabel: "Google Suite",
    typeLabel: "Shopping Feeds",
    badge: "Catalog API",
    description:
      "Synchronize live e-commerce product feeds, pricing, and availability to power high-performing Shopping ads.",
    tags: ["Product Feeds", "Shopping Schema"],
    statusText: "Catalog Synced",
    icon: <GMCIcon />,
  },
  {
    id: "meta-commerce",
    name: "Meta Commerce & Catalogs",
    category: "paid",
    categoryLabel: "Meta Suite",
    typeLabel: "Catalog Feeds",
    badge: "Catalog API",
    description:
      "Syndicate real-time inventory for Dynamic Product Ads (DPA) and personalized retargeting collections.",
    tags: ["DPA Retargeting", "Catalog Sync"],
    statusText: "Catalog Synced",
    icon: <MetaIcon />,
  },

  // --- ANALYTICS & ATTRIBUTION ---
  {
    id: "ga4",
    name: "Google Analytics 4",
    category: "data",
    categoryLabel: "Google Suite",
    typeLabel: "Analytics",
    badge: "Attribution",
    description:
      "Analyze end-to-end customer journeys with event-based funnels, cohort retention, and predictive revenue models.",
    tags: ["Multi-Touch", "Cohort Funnels"],
    statusText: "BigQuery Linked",
    icon: <GA4Icon />,
  },
  {
    id: "gtm",
    name: "Google Tag Manager",
    category: "data",
    categoryLabel: "Google Suite",
    typeLabel: "Data Layer",
    badge: "Infrastructure",
    description:
      "Orchestrate client-side and server-side tracking tags, custom triggers, and Consent Mode v2 variables.",
    tags: ["Server Container", "Consent Mode"],
    statusText: "Server Verified",
    icon: <GTMIcon />,
  },
  {
    id: "meta-capi",
    name: "Conversions API (CAPI)",
    category: "data",
    categoryLabel: "Meta Suite",
    typeLabel: "Server Tracking",
    badge: "Signal Engine",
    description:
      "Establish direct server-to-server tracking to recover lost conversions and bypass iOS 14+ ad-blockers.",
    tags: ["Server-to-Server", "EMQ 9.0+"],
    statusText: "Direct Pipeline",
    icon: <MetaIcon />,
  },
  {
    id: "looker-studio",
    name: "Looker Studio",
    category: "data",
    categoryLabel: "Reporting Suite",
    typeLabel: "Business Intel",
    badge: "Dashboards",
    description:
      "Consolidate multi-channel ad spend, revenue data, and blended ROAS into interactive client dashboards.",
    tags: ["Blended ROAS", "Live Reporting"],
    statusText: "Hourly Sync",
    icon: <LookerIcon />,
  },
  {
    id: "google-conversion",
    name: "Google Conversion Tracking",
    category: "data",
    categoryLabel: "Google Suite",
    typeLabel: "Signal Quality",
    badge: "Attribution",
    description:
      "Inject first-party enhanced conversion data and offline purchase values directly into Google Smart Bidding.",
    tags: ["Enhanced Signals", "Offline Upload"],
    statusText: "Direct Signal",
    icon: <GoogleAdsIcon />,
  },

  // --- TECHNICAL SEO ---
  {
    id: "gsc",
    name: "Google Search Console",
    category: "seo",
    categoryLabel: "Google Suite",
    typeLabel: "SERP Intelligence",
    badge: "SEO Index",
    description:
      "Track organic keyword rankings, CTR curves, sitemap indexation health, and Core Web Vitals performance.",
    tags: ["Index Coverage", "Query Analytics"],
    statusText: "API Connected",
    icon: <GSCIcon />,
  },
  {
    id: "ahrefs",
    name: "Ahrefs",
    category: "seo",
    categoryLabel: "SEO Suite",
    typeLabel: "Backlink Intel",
    badge: "Intelligence",
    description:
      "Analyze high-authority backlink profiles, uncover competitor link gaps, and track organic SERP growth.",
    tags: ["Link Intersect", "Keyword Gaps"],
    statusText: "Daily Index",
    icon: <AhrefsIcon />,
  },
  {
    id: "semrush",
    name: "Semrush",
    category: "seo",
    categoryLabel: "SEO Suite",
    typeLabel: "Competitive Intel",
    badge: "Intelligence",
    description:
      "Audit commercial search volume trends, competitor keyword matrices, and historic PPC ad copy changes.",
    tags: ["Keyword Matrix", "Competitor Ads"],
    statusText: "Market Scraped",
    icon: <SemrushIcon />,
  },
  {
    id: "screaming-frog",
    name: "Screaming Frog",
    category: "seo",
    categoryLabel: "SEO Suite",
    typeLabel: "Site Crawler",
    badge: "Technical",
    description:
      "Perform deep technical domain crawls to resolve broken redirect chains, canonical errors, and schema issues.",
    tags: ["JS Crawling", "Redirect Audits"],
    statusText: "Spider Engine",
    icon: <ScreamingFrogIcon />,
  },
  {
    id: "gbp",
    name: "Google Business Profile",
    category: "seo",
    categoryLabel: "Google Suite",
    typeLabel: "Local SEO",
    badge: "Local Maps",
    description:
      "Dominate local Google Maps 3-Pack rankings, localized search citations, and customer review velocity.",
    tags: ["Maps 3-Pack", "Local Schema"],
    statusText: "Verified Entity",
    icon: <GBPIcon />,
  },
  {
    id: "pagespeed",
    name: "PageSpeed Insights",
    category: "seo",
    categoryLabel: "Performance",
    typeLabel: "Speed Engine",
    badge: "Core Vitals",
    description:
      "Benchmark real-user field data for LCP, INP, and CLS to ensure lightning-fast mobile landing page speed.",
    tags: ["LCP < 2.5s", "CLS Zero Shift"],
    statusText: "CrUX Monitored",
    icon: <PageSpeedIcon />,
  },

  // --- CRO & UX ---
  {
    id: "clarity",
    name: "Microsoft Clarity",
    category: "cro",
    categoryLabel: "CRO Suite",
    typeLabel: "UX Forensics",
    badge: "Heatmaps",
    description:
      "Inspect session recordings, click heatmaps, rage clicks, and excessive scrolling to eliminate UX friction.",
    tags: ["Click Heatmaps", "Rage Clicks"],
    statusText: "Zero-Lag Replay",
    icon: <ClarityIcon />,
  },
  {
    id: "hotjar",
    name: "Hotjar",
    category: "cro",
    categoryLabel: "CRO Suite",
    typeLabel: "User Feedback",
    badge: "Diagnostics",
    description:
      "Diagnose checkout drop-offs, user frustration points, and collect qualitative feedback via on-site surveys.",
    tags: ["Funnel Drop-Off", "User Feedback"],
    statusText: "Live Feedback",
    icon: <HotjarIcon />,
  },
];

const categories = [
  { id: "all", label: "All Tools", count: allTools.length },
  {
    id: "paid",
    label: "Paid Media",
    count: allTools.filter((t) => t.category === "paid").length,
  },
  {
    id: "data",
    label: "Analytics & Tracking",
    count: allTools.filter((t) => t.category === "data").length,
  },
  {
    id: "seo",
    label: "Technical SEO",
    count: allTools.filter((t) => t.category === "seo").length,
  },
  {
    id: "cro",
    label: "CRO & UX",
    count: allTools.filter((t) => t.category === "cro").length,
  },
];

// =========================================================
// TOOLS SECTION COMPONENT
// =========================================================

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedToolId, setSelectedToolId] = useState<string>("gsc");

  const filteredTools =
    activeTab === "all"
      ? allTools
      : allTools.filter((tool) => tool.category === activeTab);

  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200"
      id="tools"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#046BD2] mb-3">
            TECHNOLOGY STACK
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Tools We Deploy For Maximum ROI
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
            A unified collection of certified advertising, analytics, and
            technical auditing tools powering our client campaigns.
          </p>
        </div>

        {/* Clean Segmented Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-200/70 p-1 rounded-xl border border-slate-200 flex flex-wrap items-center justify-center gap-1">
            {categories.map((cat) => {
              const isTabActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-2 cursor-pointer select-none ${
                    isTabActive
                      ? "bg-white text-slate-900 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-medium transition-colors ${
                      isTabActive
                        ? "bg-slate-100 text-slate-700"
                        : "bg-slate-300/60 text-slate-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* One Reusable Grid with Uniform ToolCards */}
        <ToolGrid>
          {filteredTools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isActive={selectedToolId === tool.id}
              onSelect={(id) => setSelectedToolId(id)}
            />
          ))}
        </ToolGrid>
      </div>
    </section>
  );
}

