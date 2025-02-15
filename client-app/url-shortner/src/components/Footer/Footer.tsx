import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-slate-900 text-white test-base text-center py-5">
        Copyright &#169; URLSHortner | Muhammed Rayan
    </div>
  );
};

export default Footer;
