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
      <a href={href} target={target} className="block hover:no-underline">
        <div className="flex flex-col border border-gray-200 hover:border-blue-500 rounded-lg shadow-sm divide-y divide-gray-200 overflow-hidden">
            {image && (
            <div className="flex-shrink-0 aspect-w-5 aspect-h-2">
            <img className="object-cover" src={image} alt=""/>
            </div>
            )}
            <div className="flex-1 bg-white p-4 flex flex-col justify-between">
            <div className="flex-1">
                {category && (
                <div className="text-sm leading-5 font-medium text-blue-600">
                {category}
                </div>)}
                <div className="mt-1 text-xl leading-7 font-semibold text-gray-900 truncate">
                    {title}
                </div>
                {description && (
                <div className="mt-1 text-sm leading-6 text-gray-500 truncate">
                    {description}
                </div>)}
            </div>
            </div>
        </div>
      </a>
    )
  }
}

export default Card;