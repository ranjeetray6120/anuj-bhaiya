"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToolItem {
  name: string;
  category: "meta" | "google" | "seo" | "tracking";
  categoryLabel: string;
  purpose: string;
  badge: string;
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

const GoogleAdsIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 192 192" fill="none" aria-hidden="true">
    <path d="M33.88 120.47 78.43 43.3c7.22-12.5 23.23-16.78 35.73-9.56 12.5 7.22 16.78 23.23 9.56 35.73L79.17 146.64c-7.22 12.5-23.23 16.78-35.73 9.56-12.5-7.22-16.78-23.23-9.56-35.73z" fill="#FBBC04"/>
    <path d="M149.88 43.3c12.5-7.22 28.51-2.94 35.73 9.56 7.22 12.5 2.94 28.51-9.56 35.73l-44.55 77.17c-7.22 12.5-23.23 16.78-35.73 9.56-12.5-7.22-16.78-23.23-9.56-35.73L149.88 43.3z" fill="#4285F4"/>
    <circle cx="56.57" cy="133.58" r="26.15" fill="#34A853"/>
  </svg>
);

const GA4Icon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#E37400" aria-hidden="true">
    <path d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"/>
  </svg>
);

const GTMIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#246FDB" aria-hidden="true">
    <path d="M12.003 0a3 3 0 0 0-2.121 5.121l6.865 6.865-4.446 4.541 1.745 1.836a3.432 3.432 0 0 1 .7.739l.012.011-.001.002a3.432 3.432 0 0 1 .609 1.953 3.432 3.432 0 0 1-.09.78l7.75-7.647c.031-.029.067-.05.098-.08.023-.023.038-.052.06-.076a2.994 2.994 0 0 0-.06-4.166l-9-9A2.99 2.99 0 0 0 12.003 0zM8.63 2.133L.88 9.809a2.998 2.998 0 0 0 0 4.238l7.7 7.75a3.432 3.432 0 0 1-.077-.729 3.432 3.432 0 0 1 3.431-3.431 3.432 3.432 0 0 1 .826.101l-5.523-5.81 4.371-4.373-2.08-2.08c-.903-.904-1.193-2.183-.898-3.342zm3.304 16.004a2.932 2.932 0 0 0-2.931 2.931A2.932 2.932 0 0 0 11.934 24a2.932 2.932 0 0 0 2.932-2.932 2.932 2.932 0 0 0-2.932-2.931z"/>
  </svg>
);

const GSCIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4" aria-hidden="true">
    <path d="M8.548 1.156L6.832 2.872v1.682h1.716zm0 3.398v.035H6.832v-.035H3.386L0 7.844v3.577h2.826V8.94c0-.525.429-.954.954-.954h16.476c.525 0 .954.43.954.954v2.48h2.754V7.844l-3.386-3.29H17.3v.035h-1.717v-.035zm7.035 0H17.3V2.872l-1.717-1.716zM8.679 1.188V2.84h6.773V1.188zm11.471 7.07a.834.834 0 00-.132.01l-.543.002c-5.216.014-10.432-.008-15.648.01-.435-.063-.794.436-.716.883v2.264h17.812c-.016-.888.045-1.782-.034-2.666-.104-.342-.427-.502-.739-.502zm-15.422 2.809l2.846 2.847 4.298-4.299h1.716l-5.156 5.157-3.704-3.705zM20.5 12.02c-.08-.002-.162.008-.242.031l-4.708 1.344-1.21-1.21-1.213 1.213 1.21 1.21-1.343 4.708c-.287 1.006.301 2.052 1.312 2.333a1.92 1.92 0 002.334-1.312l1.343-4.708 1.211 1.21 1.213-1.212-1.21-1.21 4.708-1.344c.484-.138.868-.487 1.026-.957H21.17v-1.717h-1.025a1.88 1.88 0 00-.645-.376z"/>
  </svg>
);

const GMCIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 410 410" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="gmcToolGrad" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#4385f5" />
        <stop offset="100%" stopColor="#3569d3" />
      </linearGradient>
    </defs>
    <path d="M0.2 98.3h409.6v277.4c0 18.8-15.3 34.1-34.1 34.1H34.3C15.5 409.8 0.2 394.5 0.2 375.7z" fill="#518ff5" />
    <path d="M144.7 294.2l106.4-97.3L410 355.6v20.1c-.1 18.8-15.4 34.1-34.3 34.1H260.8z" fill="url(#gmcToolGrad)" />
    <path d="M0.2 34.3C0.2 15.5 15.5 0.2 34.3 0.2h341.3c18.8 0 34.1 15.3 34.1 34.1v64H0.2z" fill="#4758b8" />
    <path d="M187.9 47.1h-40.5c-8.2 0-14.9 6.7-14.9 14.9s6.7 14.9 14.9 14.9h115.2c8.2 0 14.9-6.7 14.9-14.9s-6.7-14.9-14.9-14.9h-40.5v-4.3c0-9.4-7.6-17.1-17.1-17.1s-17.1 7.6-17.1 17.1z" fill="#ffffff" />
    <path d="M137.5 201c-8.56 0-15.5-6.94-15.5-15.5s6.94-15.5 15.5-15.5 15.5 6.94 15.5 15.5-6.94 15.5-15.5 15.5zm165.4 47.6l-93.6-93.6c-3.8-3.7-9-6-14.7-6h-72.8c-11.5 0-20.8 9.3-20.8 20.8v72.8c0 5.7 2.3 10.9 6.1 14.7l93.5 93.6c3.8 3.7 9 6.1 14.7 6.1s10.9-2.4 14.7-6.1l72.8-72.8c3.8-3.7 6.1-8.9 6.1-14.7 0-5.8-2.4-11-6.1-14.8z" fill="#ffffff" />
  </svg>
);

const GBPIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4" aria-hidden="true">
    <path d="M21.996 11.232v-.078L12.08 6.46 2.004 11.232v.078h.008v8.625h2.469V12.78l7.6-3.666 7.457 3.666v7.155h2.469V11.232zm-12.062 1.34H8.49V24h1.444v-11.428zm3.016 0h-1.444V24h1.444v-11.428zm3.016 0h-1.444V24h1.444v-11.428zm3.015 0h-1.444V24h1.444v-11.428zM12.08 0C7.218 0 3.284 3.934 3.284 8.795c0 4.152 2.87 7.633 6.726 8.543l2.07-8.156 2.07 8.156c3.856-.91 6.726-4.391 6.726-8.543 0-4.86-3.934-8.795-8.796-8.795zm0 13.065a4.27 4.27 0 110-8.54 4.27 4.27 0 010 8.54z"/>
  </svg>
);

const ScreamingFrogIcon = () => (
  <svg className="w-6 h-6" viewBox="68 2 37 37" fill="none" aria-hidden="true">
    <path d="m84.886 37.842c-1.791.012-3.582.066-5.339-.406-3.692-.992-6.45-3.22-8.495-6.38-1.394-2.154-2.013-4.545-2.031-7.092-.02-2.713-.027-5.428-.002-8.141.037-3.927 1.63-7.17 4.432-9.868 1.996-1.921 4.32-3.219 7.066-3.721a13.3 13.3 0 0 1 2.361-.222c2.757-.008 5.512-.008 8.269 0 3.664.01 6.827 1.274 9.491 3.79 2.442 2.303 3.904 5.093 4.278 8.434.055.507.082 1.018.082 1.529.007 3.37.008 6.742.003 10.112 0 2.294-1.696 3.991-3.999 3.996-2.695.005-5.39-.002-8.085.005-.391 0-.772-.123-1.165-.076-.456-.297-.91-.597-1.369-.89-.13-.083-.29-.124-.358-.285-.423-.79-.796-1.6-.934-2.504-.158.517-.258 1.04-.529 1.506a22.14 22.14 0 0 1 -2.287-1.862c.064-.028.127-.06.193-.085 1.366-.509 2.209-1.482 2.517-2.893.183-.838.068-1.696.068-2.545a40.016 40.016 0 0 1 1.68-3.464c.12-.225.273-.431.454-.612.489-.476 1.103-.425 1.496.132.165.24.295.501.387.776-.086.058-.07.148-.07.232.001 2.213-.012 4.427.01 6.64.014 1.347.668 1.96 2.032 1.97 1.304.008 2.608.006 3.912.002 1.346-.004 2.022-.673 2.03-2.022.009-1.229 0-2.457 0-3.686a6.795 6.795 0 0 1 2.245-.707c.172-.022.305-.056.36-.242.097-.328.1-.645-.084-.948-.251-.413-.634-.486-1.035-.213-.446.304-.929.527-1.474.59l-.02-2.11c.075-.152.235-.205.36-.297.35-.258.414-.609.17-.976-.142-.217-.358-.314-.595-.384-.078-1.272-.473-2.45-1.06-3.571-.542-1.034-1.294-1.909-2.1-2.74.339-1.21-.062-1.831-1.32-2.041a3.952 3.952 0 0 0 -.43-.064c-1.013-.056-1.91-.35-2.55-1.195a1.428 1.428 0 0 0 -.182-.18c-.344-.32-.74-.42-1.21-.351-.756.11-1.19.597-1.53 1.214l-6.733-.012c-.021-.312.05-.622.003-.937-.054-.361-.269-.507-.7-.432-.404.07-.553.284-.45.654.063.231.135.46.204.69l-.477.04c-.472-.977-.912-1.96-.871-3.084.013-.35-.327-.591-.741-.562-.437.03-.842.388-.792.706.015.071.048.137.094.192.607.775.902 1.687 1.146 2.62.025.093.118.224 0 .3a.39.39 0 0 1 -.413.02 1.592 1.592 0 0 1 -.527-.498c-.235-.34-.461-.687-.69-1.032a3.732 3.732 0 0 0 -.594-.737.664.664 0 0 0 -.778-.118c-.288.131-.41.37-.412.672-.003.43.266.776.706.916.101.032.241.009.278.136.126.437.486.718.718 1.083-.078.124-.22.142-.338.198-2.322 1.112-4.188 2.693-5.26 5.089-.566 1.262-.79 2.597-.817 3.97-.525-.308-.98-.713-1.475-1.064-.26-.185-.521-.194-.774-.005-.275.205-.348.49-.257.81.089.312.244.556.629.539.841-.037 1.4.45 1.9 1.038l-.021.939c-.32-.024-.605-.171-.903-.269-.346-.113-.683-.256-1.055-.265-.428-.01-.625.17-.652.594-.04.61.051.74.54.794.698.076 1.4.144 2.086.308l-.001 4.82a9.51 9.51 0 0 0 .473 2.902c.519 1.615 1.496 2.93 2.69 4.11 1.57 1.553 3.43 2.488 5.642 2.708 1.168.117 2.338.035 3.508.057.901.018 1.802.018 2.704.027-.013.099-.104.129-.165.184-1.196 1.107-2.454 2.162-3.069 3.744z" fill="#72b52d"/>
    <path d="m82.855 5.959c-.069-.23-.141-.46-.205-.69-.103-.371.047-.585.451-.655.431-.074.645.072.7.432.047.315-.024.625-.004.937-.098.696-.272 1.384-.23 2.096.04.672.297 1.193.973 1.437.278.095.52.272.695.508-.005.18.185.372-.028.54-.218.175-.434.095-.65-.003-.067-.03-.13-.073-.198-.096-.092-.033-.195-.057-.281.004-.113.077-.028.177-.004.263.144.522.526.862.924 1.19.131.107.162-.004.209-.088l1.01-1.814c.209-.237.41-.482.626-.71.596-.63 1.37-1.002 2.103-1.433.752-.442 1.301-1.05 1.584-1.882.339-.618.773-1.103 1.53-1.214.47-.068.866.031 1.21.351.065.055.125.116.18.18.64.845 1.539 1.139 2.55 1.195.145.013.29.035.432.064 1.256.21 1.658.831 1.319 2.04-.222.319-.426.649-.668.952-1.02 1.278-2.135 2.463-3.466 3.43-.124.089-.252.16-.247.362.025 1.17.221 2.298.814 3.322.592 1.022 1.436 1.664 2.68 1.664.252 0 .362-.073.407-.334.095-.54-.012-1.065-.062-1.596-.014-.153-.085-.316.02-.458.15-.2.719-.28.996-.146.323.157.38.407.266.728a5.338 5.338 0 0 0 -.181.628c-.063.237-.055.485.022.718.08.225.158.279.376.108.826-.652 1.24-1.536 1.481-2.526.136-.555.138-.556.722-.539.237.07.453.168.596.384.242.367.18.718-.171.976-.125.092-.284.145-.36.297-.205.117-.268.332-.36.525-.25.536-.345 1.122-.566 1.696.338.006.646 0 .945-.11.545-.063 1.028-.286 1.475-.59.4-.273.784-.2 1.035.213.184.302.18.619.083.948-.055.186-.188.22-.36.241a6.827 6.827 0 0 0 -2.245.708c-.28.115-.561.226-.837.348-.823.36-1.653.676-2.553.818-1.348.213-3.573-.946-3.935-2.36-.167-.655-.39-1.295-.589-1.942a3.16 3.16 0 0 0 -.387-.776c-.393-.558-1.008-.608-1.498-.132-.18.18-.334.387-.454.612a39.794 39.794 0 0 0 -1.68 3.463c-.577 1.288-1.455 2.36-2.41 3.379-.27.28-.492.603-.658.955-.407.894-.4.626.291 1.191.721.67 1.485 1.293 2.288 1.862.458.376.898.778 1.463.998.067.161.227.202.358.286.458.293.913.592 1.369.89.246.23.508.447.734.696.696.769.735 1.73.114 2.56-.21.283-.448.543-.711.777-.079.074-.16.145-.234.223-.528.556-1.126 1.043-1.614 1.638-.1.12-.239.252-.183.418.15.48.45.898.858 1.192a.211.211 0 0 0 .272-.01c.077-.07.031-.157.008-.237-.076-.265-.308-.397-.491-.573-.13-.124-.308-.273-.216-.458a.775.775 0 0 1 .622-.455c.26-.027.329.17.402.348.129.314.233.64.37.95.138.311.377.373.694.253.363-.139.496-.406.494-.768-.002-.377-.026-.755-.009-1.13.017-.348.332-.669.596-.616.354.07.387.359.379.653-.006.218-.035.437-.027.655.01.325.156.432.476.376.377-.067.584-.321.716-.657.217-.557.289-1.152.446-1.724.16-.235.28-.506.589-.595.463-.135.743.025.996.574.001.33-.101.652-.294.921-.23.342-.476.675-.72 1.007-.309.42-.648.826-.82 1.326-.076.22-.259.457-.037.702a.51.51 0 0 0 .277.138c.536.12 1.048.015 1.558-.134l.105-.018c.276-.041.553-.075.827-.126.259-.047.425.04.497.293.056.16.097.323.125.49.049.46-.088.632-.545.722-.627.124-1.261.121-1.892.078a7.624 7.624 0 0 0 -3.048.408 5.67 5.67 0 0 1 -3.234.135c-1.212-.29-2.454-.336-3.686-.463a3.657 3.657 0 0 1 -.572-.106c-.707-.19-.876-.483-.713-1.207a1.78 1.78 0 0 0 .023-.215c.615-1.58 1.872-2.637 3.07-3.742.06-.056.152-.086.165-.184a14.205 14.205 0 0 0 2.061-1.995c.13-.152.041-.186-.095-.244a930 930 0 0 1 -4.523-1.904c-.866-.443-1.68-.975-2.52-1.461-.57-.33-1.155-.629-1.797-.797-.618-.162-1.239-.244-1.866-.04a.444.444 0 0 0 -.315.07c-.25.135-.346.066-.39-.208-.083-.52-.29-1-.547-1.458-.44-.783-.877-1.568-1.311-2.354-.728-1.322-1.479-2.625-2.558-3.709-.328-.33-.692-.518-1.155-.523-.686-.165-1.387-.232-2.087-.309-.488-.053-.58-.183-.54-.794.028-.424.226-.604.653-.594.371.009.709.152 1.055.266.298.097.582.243.902.268.274.122.549.13.88.018-.308-.329-.53-.686-.858-.956-.5-.59-1.06-1.075-1.901-1.039-.385.017-.54-.226-.629-.539-.09-.32-.018-.605.257-.81.254-.19.513-.18.775.006.494.35.95.755 1.474 1.063a21.23 21.23 0 0 0 2.35 1.686c.032-.25-.081-.408-.185-.57-.125-.192-.313-.336-.416-.549-.161-.334.05-.519.27-.698.217-.177.374-.044.53.112.312.31.458.71.606 1.106.24.645.425 1.311.755 1.92.123.18.214.392.475.475.033-.379.063-.727.095-1.075.043-.461.116-.914.413-1.295.314-.403.769-.569 1.241-.595.323-.017.468.34.655.567.145.178.276.37.39.57.254.438.495.884.74 1.327a9.753 9.753 0 0 0 1.204 2.146c.305-2.133.886-4.091 1.553-6.027.17-.49.167-.49-.337-.673-.722-.5-1.115-1.226-1.386-2.03-.166-.492-.31-.991-.462-1.487-.202-.958-.461-1.898-.878-2.787-.266-.569-.695-1.01-1.199-1.381-.231-.366-.59-.646-.717-1.083-.037-.128-.177-.104-.278-.136-.44-.14-.709-.487-.706-.916.001-.303.124-.54.412-.672a.662.662 0 0 1 .778.118c.229.22.429.467.594.737.229.345.455.692.69 1.032.135.204.315.374.527.498a.392.392 0 0 0 .413-.02c.118-.076.025-.207 0-.3-.244-.933-.54-1.845-1.146-2.62a.45.45 0 0 1 -.094-.192c-.05-.318.355-.675.792-.706.415-.03.754.213.741.562-.041 1.123.399 2.107.871 3.083l.351.898c.233-.342.28-.63.13-.942z" fill="#010201"/>
    <path d="m95.45 33.91c-.158.574-.23 1.168-.447 1.725-.131.336-.338.591-.716.657-.32.057-.465-.05-.477-.376-.008-.217.023-.437.027-.655.007-.293-.024-.583-.379-.653-.264-.053-.58.268-.595.616-.018.375.005.754.009 1.13.002.362-.131.63-.494.768-.317.12-.557.059-.694-.253-.137-.31-.242-.635-.37-.95-.074-.177-.142-.374-.403-.348a.78.78 0 0 0 -.622.455c-.092.185.086.334.216.459.183.175.415.307.491.572.024.08.07.168-.007.238a.213.213 0 0 1 -.273.009 2.316 2.316 0 0 1 -.857-1.191c-.056-.166.083-.298.182-.42.488-.593 1.086-1.081 1.615-1.637.074-.078.155-.15.233-.223.13.1.282.052.423.053 1.045.013 2.091.018 3.138.025zm-.287 3.937c-.222-.245-.039-.482.037-.702.172-.5.511-.906.82-1.327.245-.332.49-.664.72-1.006.193-.269.295-.591.294-.921.129.089.07.223.07.334.005 1.203.001 2.405 0 3.607l-.105.018zm-18.166-18.967c.145-.25.062-.521.062-.78.005-1.458.276-2.851 1.039-4.113.847-1.4 1.961-2.523 3.48-3.205.152.496.295.996.46 1.488.272.804.665 1.53 1.387 2.03-1.163.628-1.902 1.585-2.248 2.858-.15.559-.116 1.13-.17 1.695-.247-.444-.488-.89-.742-1.328a4.14 4.14 0 0 0 -.39-.57c-.187-.226-.333-.584-.655-.566-.472.026-.926.192-1.241.595-.297.38-.37.833-.412 1.295l-.096 1.075c-.261-.083-.352-.296-.474-.474zm8.565 10.893c-2.508.432-4.496-.528-6.183-2.299.627-.203 1.248-.121 1.866.04.641.17 1.226.468 1.796.797.84.487 1.655 1.02 2.52 1.462zm-.328-19.749c.326-.038.656-.04.983-.004l-1.011 1.814c-.047.084-.078.195-.209.087-.398-.327-.78-.667-.924-1.189-.024-.086-.108-.185.004-.264.086-.06.19-.036.282-.004.068.024.13.066.196.097.216.099.433.178.652.004.211-.17.022-.36.027-.54zm3.971 27.813a1.642 1.642 0 0 1 -.621-.134c-.321-.135-.343-.258-.09-.485a.78.78 0 0 1 .864-.128.785.785 0 0 1 .245.184c.27.288.24.413-.135.52a1.94 1.94 0 0 1 -.263.043z" fill="#72b52d"/>
  </svg>
);


const AhrefsIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#0056B3"/>
    <path d="M5 18h3.8l1.4-4h4.6l1.4 4H20L13.8 6h-3.6L5 18Zm6.2-6.5 1.8-5.2 1.8 5.2h-3.6Z" fill="#FFFFFF"/>
  </svg>
);

const SemrushIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF642D" aria-hidden="true">
    <path d="M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114z"/>
  </svg>
);

const PageSpeedIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path fill="#0086F8" d="M12 3a9 9 0 0 0-9 9c0 3.6 2.1 6.7 5.2 8.1l1.5-2.6A6 6 0 0 1 6 12a6 6 0 1 1 11.2 2.9l1.6 2.6c2.4-1.6 3.2-4.8 3.2-5.5a9 9 0 0 0-9-9Zm-.5 4.5v5l3.5 2.1.8-1.3-2.8-1.7V7.5h-1.5Z"/>
  </svg>
);

const ClarityIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path fill="#0078D4" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5ZM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"/>
  </svg>
);

const HotjarIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FD3A5C" aria-hidden="true">
    <path d="M10.119 9.814C12.899 8.27 16.704 6.155 16.704 0h-4.609c0 3.444-1.676 4.375-4.214 5.786C5.1 7.33 1.295 9.444 1.295 15.6h4.61c0-3.444 1.676-4.376 4.214-5.786zM18.096 8.4c0 3.444-1.677 4.376-4.215 5.785-2.778 1.544-6.585 3.66-6.585 9.815h4.609c0-3.444 1.676-4.376 4.214-5.786 2.78-1.544 6.586-3.658 6.586-9.814h-4.609z"/>
  </svg>
);

const LookerIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4" aria-hidden="true">
    <path d="M11.9475 0c-1.1598.0021-2.0982.944-2.096 2.1038a2.1 2.1 0 00.356 1.166l.895-.8959a.884.884 0 11.565.564l-.895.895c.9593.6478 2.2621.3953 2.91-.564.6478-.9593.3953-2.262-.564-2.91A2.096 2.096 0 0011.9475 0zm-.835 6.1128a3.2629 3.2629 0 00-.653-1.965l-1.164 1.162a1.667 1.667 0 01-.318 2.012l.632 1.5449a3.2819 3.2819 0 001.503-2.754zm-3.2499 1.666h-.03c-.9217.0009-1.6697-.7455-1.6707-1.6673-.001-.9217.7454-1.6697 1.6672-1.6707a1.669 1.669 0 01.9195.275l1.152-1.152c-1.4069-1.141-3.4724-.9257-4.6135.4811s-.9257 3.4723.481 4.6135a3.2799 3.2799 0 002.7275.6652l-.633-1.5439v-.001zm4.1279 1.3359c-.728 0-1.452.106-2.15.315l.922 2.2519c2.6872-.6819 5.4184.9438 6.1002 3.631.6818 2.6873-.9439 5.4184-3.6311 6.1002s-5.4184-.9439-6.1002-3.631c-.5682-2.2394.4655-4.5774 2.5041-5.6643l-.91-2.2449c-3.6908 1.808-5.2173 6.2657-3.4093 9.9567l.0005.001c1.808 3.6909 6.2657 5.2173 9.9567 3.4093l.001-.0005c3.6913-1.8071 5.2187-6.2645 3.4116-9.9558a7.4417 7.4417 0 00-6.6865-4.1696h-.008l-.001.001z"/>
  </svg>
);

// Unified Tools Data Array
const allTools: ToolItem[] = [
  // --- META TOOLS ---
  {
    name: "Meta Ads Manager",
    category: "meta",
    categoryLabel: "Meta Ecosystem",
    purpose: "Facebook & Instagram paid performance campaigns, dynamic budgeting & audience scaling.",
    badge: "Meta Ads",
    icon: <MetaIcon />,
  },
  {
    name: "Meta Business Suite",
    category: "meta",
    categoryLabel: "Meta Ecosystem",
    purpose: "Manage Facebook & Instagram business assets, pages, access rights & unified media.",
    badge: "Business Suite",
    icon: <MetaIcon />,
  },
  {
    name: "Meta Events Manager",
    category: "meta",
    categoryLabel: "Meta Ecosystem",
    purpose: "Monitor live conversion events, signal quality & Event Match Quality (EMQ) scores.",
    badge: "Events Manager",
    icon: <MetaIcon />,
  },
  {
    name: "Meta Pixel",
    category: "meta",
    categoryLabel: "Meta Ecosystem",
    purpose: "Website & browser-level tracking for custom audiences, retargeting & add-to-carts.",
    badge: "Meta Pixel",
    icon: <MetaIcon />,
  },
  {
    name: "Conversions API (CAPI)",
    category: "meta",
    categoryLabel: "Meta Ecosystem",
    purpose: "Direct server-to-server tracking bypassing iOS 14+ ad-blockers for accurate attribution.",
    badge: "Server CAPI",
    icon: <MetaIcon />,
  },
  {
    name: "Meta Commerce Manager",
    category: "meta",
    categoryLabel: "Meta Ecosystem",
    purpose: "Product catalogs, dynamic feeds & automated Advantage+ Dynamic Product Ads (DPA).",
    badge: "Catalogs",
    icon: <MetaIcon />,
  },
  {
    name: "Meta Ads Library",
    category: "meta",
    categoryLabel: "Meta Ecosystem",
    purpose: "Competitor ad research, creative angle dissection & market hook benchmarking.",
    badge: "Ad Intelligence",
    icon: <MetaIcon />,
  },

  // --- GOOGLE TOOLS ---
  {
    name: "Google Ads",
    category: "google",
    categoryLabel: "Google Stack",
    purpose: "Search, Shopping, Performance Max (PMax), YouTube Video & Display advertising.",
    badge: "Google Ads",
    icon: <GoogleAdsIcon />,
  },
  {
    name: "Google Analytics 4 (GA4)",
    category: "google",
    categoryLabel: "Google Stack",
    purpose: "Website traffic, user behaviour, multi-touch conversion attribution & funnel analysis.",
    badge: "GA4 Analytics",
    icon: <GA4Icon />,
  },
  {
    name: "Google Tag Manager (GTM)",
    category: "google",
    categoryLabel: "Google Stack",
    purpose: "Manage all tracking tags, conversion triggers & datalayer variables in one place.",
    badge: "Tag Manager",
    icon: <GTMIcon />,
  },
  {
    name: "Google Search Console",
    category: "google",
    categoryLabel: "Google Stack",
    purpose: "SEO indexation, search queries, organic impressions, CTR & site health performance.",
    badge: "Search Console",
    icon: <GSCIcon />,
  },
  {
    name: "Google Merchant Center",
    category: "google",
    categoryLabel: "Google Stack",
    purpose: "Product feeds synchronization for high-performing Google Shopping & PMax campaigns.",
    badge: "Merchant Center",
    icon: <GMCIcon />,
  },
  {
    name: "Google Business Profile",
    category: "google",
    categoryLabel: "Google Stack",
    purpose: "Local business visibility, Google Maps 3-Pack rankings & verified customer reviews.",
    badge: "Local Maps",
    icon: <GBPIcon />,
  },

  // --- SEO & WEBSITE TOOLS ---
  {
    name: "Screaming Frog",
    category: "seo",
    categoryLabel: "SEO & Auditing",
    purpose: "Technical SEO audits, broken link detection, redirect chains & crawl optimization.",
    badge: "Technical SEO",
    icon: <ScreamingFrogIcon />,
  },
  {
    name: "Ahrefs",
    category: "seo",
    categoryLabel: "SEO & Auditing",
    purpose: "Keywords research, high-authority backlinks analysis & competitor gap discovery.",
    badge: "Backlinks & Gap",
    icon: <AhrefsIcon />,
  },
  {
    name: "Semrush",
    category: "seo",
    categoryLabel: "SEO & Auditing",
    purpose: "SEO audits, competitor intelligence, search volume trends & keyword research.",
    badge: "Competitor SEO",
    icon: <SemrushIcon />,
  },
  {
    name: "PageSpeed Insights",
    category: "seo",
    categoryLabel: "SEO & Auditing",
    purpose: "Core Web Vitals audits (LCP, INP, CLS) & actionable website speed optimizations.",
    badge: "Website Speed",
    icon: <PageSpeedIcon />,
  },
  {
    name: "Microsoft Clarity",
    category: "seo",
    categoryLabel: "SEO & Auditing",
    purpose: "Session recordings, click heatmaps & user drop-off UX friction identification.",
    badge: "Clarity Heatmaps",
    icon: <ClarityIcon />,
  },
  {
    name: "Hotjar",
    category: "seo",
    categoryLabel: "SEO & Auditing",
    purpose: "Behaviour analysis, scroll heatmaps, live session feedback & funnel analytics.",
    badge: "Behaviour Analysis",
    icon: <HotjarIcon />,
  },

  // --- CONVERSION & TRACKING ---
  {
    name: "Google Ads Conversion Tracking",
    category: "tracking",
    categoryLabel: "Tracking & CRO",
    purpose: "Direct ROAS measurement, automated Smart Bidding signals & conversion attribution.",
    badge: "ROAS Tracking",
    icon: <GoogleAdsIcon />,
  },
  {
    name: "Looker Studio",
    category: "tracking",
    categoryLabel: "Tracking & CRO",
    purpose: "Live interactive executive reporting dashboards with verified multi-channel ROAS.",
    badge: "Live Reporting",
    icon: <LookerIcon />,
  },
];

const categories = [
  { id: "all", label: "All Marketing Tools", count: allTools.length },
  { id: "meta", label: "Meta Ecosystem", count: allTools.filter(t => t.category === "meta").length },
  { id: "google", label: "Google Stack", count: allTools.filter(t => t.category === "google").length },
  { id: "seo", label: "SEO & Auditing", count: allTools.filter(t => t.category === "seo").length },
  { id: "tracking", label: "Attribution & Tracking", count: allTools.filter(t => t.category === "tracking").length },
];

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredTools =
    activeTab === "all"
      ? allTools
      : allTools.filter((tool) => tool.category === activeTab);

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50/70 border-t border-slate-200 relative overflow-hidden" id="tools">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#168ed3] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#168ed3] animate-pulse" />
            AdForge Growth &amp; Analytics Stack
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.3rem] font-extrabold text-slate-900 leading-tight">
            Industry-Leading Tools We Deploy For{" "}
            <span className="text-[#168ed3]">Maximum Campaign ROI</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
            Enterprise-grade advertising, SEO, and tracking tools deployed by our certified specialists for scalable brand growth.
          </p>
        </motion.div>

        {/* Category Tabs Filter - Unified Single Theme */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs ${
                  isActive
                    ? "bg-[#168ed3] text-white shadow-md scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Unified Tools Grid - Clean Single Color Theme */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Unified Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#168ed3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Header Row: Authentic Brand Logo in Clean Container + Unified Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/70 shadow-xs flex items-center justify-center p-2.5 group-hover:border-[#168ed3]/40 group-hover:scale-105 transition-all">
                      {tool.icon}
                    </div>

                    {/* Single Unified Color Badge */}
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50/90 text-[#168ed3] border border-blue-100/90">
                      {tool.badge}
                    </span>
                  </div>

                  {/* Tool Name */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#168ed3] transition-colors mb-2">
                    {tool.name}
                  </h3>

                  {/* Purpose / Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {tool.purpose}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="text-slate-400 font-semibold">{tool.categoryLabel}</span>
                  <span className="text-[#168ed3] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    AdForge Stack →
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
