"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("14f745c8-ba35-4527-943a-dd8a6f862759");
  }, []);

  return null;
};