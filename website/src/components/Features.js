import React from 'react';

import Video from '@site/src/components/Video';

class Features extends React.Component {


  render() {
    let {title, description, items, imageUrl, videoUrl, imagePosition, containerClass, theme} = this.props;

    let textContainerClass = "lg:col-start-1"
    let imageContainerClass = "lg:col-start-2"

    if (imagePosition === "left") {
      textContainerClass = "lg:col-start-2"
      imageContainerClass = "lg:col-start-1"
    }

    if (!containerClass)
      containerClass = ""

    if (!theme)
      theme = "green"

    return (
    
<div className={"lg:py-12 py-8 overflow-hidden " + containerClass}>
  <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
    <div className="relative lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div className={textContainerClass}>
        <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
          {title}
        </h4>
        <p className="mt-3 text-lg leading-7 text-gray-500">
          {description}
        </p>

        <ul className="pl-0">
        {items && items.map(({ title, description }, idx) => (
          <li className="mt-6" key={idx}>
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className={"h-6 w-6 " + "text-" + theme + "-400"} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                {title && (
                <div className="text-lg mb-2 leading-6 font-medium text-gray-900">{title}</div>
                )}
                {description &&(
                <p className="mb-0 text-base leading-6 text-gray-500">
                  {description} 
                </p>)}
              </div>
            </div>
          </li>
        ))}
        </ul>
      </div>

      <div className={"mt-10 mx-4 relative lg:mt-0 " + imageContainerClass}>
        <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
          <defs>
            <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
        </svg>
        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md sm:mx-4">
          <div className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
            {videoUrl && (
              <Video 
                poster={imageUrl}
                autoplay={false}
                urls={[
                    {name:"高清", url:videoUrl},
                ]}/>
            )}
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
    )
  }
}

export default Features;