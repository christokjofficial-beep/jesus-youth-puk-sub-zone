"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    globalData?: { publicUrl: string; assetsUrl: string };
    jQuery?: any;
    $?: any;
  }
}

export default function OrganimoEngineLoader() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure window.globalData exists with correct paths
      window.globalData = window.globalData || {
        publicUrl: "/",
        assetsUrl: "/resources/assets/",
      };

      // Ensure jQuery stub or full jQuery exists
      if (!window.jQuery) {
        window.jQuery = window.$ = function () {
          return {
            trigger: function () { return this; },
            on: function () { return this; },
            one: function () { return this; },
            off: function () { return this; },
            addClass: function () { return this; },
            removeClass: function () { return this; },
            block: function () { return this; },
            unblock: function () { return this; },
            find: function () { return this; },
            each: function () { return this; },
            length: 0,
          };
        } as any;
        (window.jQuery as any).ajax = function () { };
        (window.jQuery as any).post = function () { };
      }

      // Inject the WebGL engine module after React has mounted and hydrated cleanly
      const script = document.createElement("script");
      script.type = "module";
      script.src = "/build/js-25cd474e.js?v=cgtrader_heroic_v24";
      script.id = "organimo-webgl-engine";
      document.body.appendChild(script);

      return () => {
        const existing = document.getElementById("organimo-webgl-engine");
        if (existing && document.body.contains(existing)) {
          document.body.removeChild(existing);
        }
      };
    }
  }, []);

  return null;
}
