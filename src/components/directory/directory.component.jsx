import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((section) => {
        return (
          <MenuItem
            key={section.id}
            title={section.title}
            size={section.size}
            imageUrl={section.imageUrl}
            linkUrl={section.linkUrl}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
