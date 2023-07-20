import Link from "next/link";
import React from "react";

const Email = () => {
  return (
    <div className="email">
      <Link href="mailto:prajwalurkude007@gmail.com" className="email-link">
        prajwalurkude007@gmail.com
      </Link>
    </div>
  );
};

export default Email;
