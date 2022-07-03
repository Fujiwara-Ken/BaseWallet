import Link from 'next/link';
import React from 'react';

type BaseLinkProps = {
  handleClick?: () => Promise<void>;
  className?: string;
};

// TODO: aタグのままではスタイル反映されないので、Nextタグで反映されるよう修正
const BaseLink: React.FC<BaseLinkProps> = ({ ...props }) => {
  const baseLinkStyling = `mb-6 text-sm text-purple-600 hover:text-purple-700 hover:underline0`;

  return (
    <div className="flex justify-end">
      <Link href="#" className={baseLinkStyling}>
        Forgot your password?
      </Link>
    </div>
  );
};

export default BaseLink;
