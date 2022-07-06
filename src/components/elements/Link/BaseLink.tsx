import Link from "next/link";
import React from "react";

type BaseLinkProps = {
  handleClick?: () => Promise<void>;
  linkLabel: string;
  className?: string;
};

// TODO: aタグのままではスタイル反映されないので、Nextタグで反映されるよう修正
const BaseLink: React.FC<BaseLinkProps> = ({ ...props }) => {
  const baseLinkStyling = `font-medium text-indigo-600 hover:text-indigo-500`;

  return (
    <div className="flex justify-between items-center">
      <div className="text-sm">
        <Link href="#" className={baseLinkStyling}>
          {props.linkLabel}
        </Link>
      </div>
    </div>
  );
};

export default BaseLink;
