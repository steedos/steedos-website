import React from 'react';

import Video from '@site/src/components/Video';

class Features extends React.Component {


  render() {
    let {title, description, items, imageUrl, imageClass, videoUrl, imagePosition, containerClass, theme} = this.props;

    let textContainerClass = "lg:col-start-1"
    let imageContainerClass = "lg:col-start-2"

    if (imagePosition === "left") {
      textContainerClass = "lg:col-start-2"
      imageContainerClass = "lg:col-start-1"
    }

    if (!imageClass)
      imageClass = "lg:max-w-xl rounded-lg shadow-lg"

    if (!containerClass)
      containerClass = ""

    if (!theme)
      theme = "green"

    let imageComponent = (<img src={imageUrl}/>);
    if (videoUrl) {
      imageComponent = (
        <Video 
            poster={imageUrl}
            autoplay={false}
            urls={[
                {name:"高清", url:videoUrl},
            ]}/>
      );
    }

    return (
    
<div className={"lg:py-12 py-8 overflow-hidden " + containerClass}>
  <div className="relative mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
    <div className="relative lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div className={textContainerClass}>
        <div className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
          {title}
        </div>
        <div className="mt-3 text-lg text-gray-500">
          {description}
        </div>

        <dl className="mt-10 space-y-10">
        {items && items.map(({ title, description }, idx) => (
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className={"h-6 w-6 " + "text-" + theme + "-400"} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4">
                {title && (
                <div className="mb-2 text-lg leading-6 font-medium text-gray-900">{title}</div>
                )}
                {description &&(
                <div className="text-base text-gray-500">
                  {description} 
                </div>)}
              </div>
            </div>
        ))}
        </dl>
      </div>

      {imageUrl && (
      <div className={"mt-10 mx-4 relative lg:mt-0 " + imageContainerClass}>
        <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
          <defs>
            <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
        </svg>
        <div className={"relative mx-auto w-full sm:mx-4 overflow-hidden " + imageClass}>
          <div className="relative block w-full focus:outline-none focus:shadow-outline">
          {imageComponent}
          </div>
        </div>
      </div>
      )}
    </div>
  </div>
</div>
    )
  }
}

export default Features;