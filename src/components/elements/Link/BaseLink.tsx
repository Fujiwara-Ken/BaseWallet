import Link from "next/link";
import React from "react";

type BaseLinkProps = {
  handleClick?: () => Promise<void>;
  linkLabel: string;
  className?: string;
};

const BaseLink: React.FC<BaseLinkProps> = ({ ...props }) => {
  const baseLinkStyling = `font-medium text-indigo-600 hover:text-indigo-500`;

  return (
    <div className="flex justify-between items-center">
      <div className="text-sm">
        <Link href="#">
          <a className={baseLinkStyling}>{props.linkLabel}</a>
        </Link>
      </div>
    </div>
  );
};

export default BaseLink;
