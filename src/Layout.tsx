/**
 * This Layout is needed for Starter Kit.
 */
import { JSX } from 'react';
import Head from 'next/head';
import {
  LayoutServiceData,
  Field,
  HTMLLink,
  Placeholder,
  DesignLibrary,
  RenderingType,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';
import Script from 'next/script';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  const renderContent = () => (
    <>
      <header>
        <div id="header">
          {route && <Placeholder name="headless-header" rendering={route} />}
          {route && <Placeholder name="navbar" rendering={route} />}
        </div>
      </header>
      <main role="main">
        <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
      </main>
      <footer className="bg-dark">
        <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
      </footer>
      {route && <Placeholder name="page-sidebar" rendering={route} />}
    </>
  );

  return (
    <>
      {route && <Placeholder name="head" rendering={route} />}
      <Scripts />
      <Script src="/scripts/Sitecore.Foundation.Frameworks.min.js"></Script>
      <Script src="/scripts/Sitecore.Foundation.Theming.min.js"></Script>
      <link href="/styles/vendor.min.css" rel="stylesheet" />
      <link href="/styles/niteflight.min.css" rel="stylesheet" />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={`main-container ${mainClassPageEditing}`}>
        {layoutData.sitecore.context.renderingType === RenderingType.Component ? (
          <DesignLibrary {...layoutData} />
        ) : (
          renderContent()
        )}
      </div>
    </>
  );
};

export default Layout;
