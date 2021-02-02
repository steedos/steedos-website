import React from 'react';

class Card extends React.Component {

  static defaultProps = {
      href: "",
      image: "",
      category: "",
      title: "",
      description: "",
      theme: "green",
      target: "_self",
  }

  constructor(props) {
    super(props);
  }

  render() {
    let {href, target, image, category, title, description, theme} = this.props;
    return (
      <a href={href} target={target} className="block hover:no-underline flex flex-col rounded-lg overflow-hidden bg-white border border-gray-200 hover:border-blue-500">
            {image && (
            <div className="flex-shrink-0 aspect-w-16 aspect-h-9">
              <img className="object-cover" src={image} alt=""/>
            </div>
            )}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div className="flex-1">
                  {category && (
                  <div className="text-sm leading-5 font-medium text-blue-600">
                  {category}
                  </div>)}
                  <div className="my-2 text-2xl leading-7 font-semibold text-gray-900">
                      {title}
                  </div>
                  {description && (
                  <div className="my-2 text-md leading-6 text-gray-500">
                      {description}
                  </div>)}
              </div>
              {/* <div class="flex items-center"></div> */}
            </div>
      </a>
    )
  }
}

export default Card;