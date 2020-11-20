import React from 'react';

import Video from '@site/src/components/Video';

class Breadcrumb extends React.Component {

  render() {
    let {items} = this.props;

    return (
    <div class="border-b border-gray-200">
      <div class="mx-auto px-4 lg:max-w-screen-xl">
      {/* <nav class="sm:hidden" aria-label="Back">
        <a href="#" class="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200">
          <svg class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          Back
        </a>
      </nav> */}
      <nav class="py-4" aria-label="Breadcrumb">
        <ol class="flex items-center">
          {items && items.map(({ title, href}, idx) => {
            return (
              <li>
                <div class="flex items-center">
                  {idx > 0 && (
                    <svg class="flex-shrink-0 h-5 w-5 text-gray-400" x-description="Heroicon name: chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  )}
                    <a href={href} class="font-medium ">{title}</a>
                </div>
              </li>
            )}
          )}
        </ol>
      </nav>
    </div>
  </div>
    )
  }
}

export default Breadcrumb;