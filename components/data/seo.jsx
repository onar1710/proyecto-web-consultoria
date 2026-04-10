"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Leexms - Servicios Contables y Consultoría";
  }, []);
};

export default SEO;