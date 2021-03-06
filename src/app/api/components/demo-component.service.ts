import { Injectable } from '@angular/core';

import { StacheDemoComponent } from './demo-component';

@Injectable()
export class StacheDemoComponentService {
  [index: string]: any;
  public components: StacheDemoComponent[] = [
    {
      name: 'Stache wrapper',
      route: '/api/components/wrapper',
      icon: 'gift',
      summary: 'Provides a container for all Stache components.'
    },
    {
      name: 'Page summary',
      route: '/api/components/page-summary',
      icon: 'file-text',
      summary: 'Provides a formatted section at the top of the page for summary content.'
    },
    {
      name: 'Page anchor',
      route: '/api/components/page-anchor',
      icon: 'link',
      summary: 'Provides a section anchor for inter page navigation.'
    },
    {
      name: 'Action buttons',
      route: '/api/components/action-buttons',
      icon: 'th-list',
      summary: 'Provides a clean, visual navigation pattern for linking \
      to multiple documents using the SKY UX Action Button.'
    },
    {
      name: 'Grid',
      route: '/api/components/grid',
      icon: 'table',
      summary: 'Provides a layout grid for creating responsive content.'
    },
    {
      name: 'Code block',
      route: '/api/components/code-block',
      icon: 'code',
      summary: 'Provides a formatted block of code with syntax highlighting.'
    },
    {
      name: 'Code',
      route: '/api/components/code',
      icon: 'code',
      summary: 'Provides a formatted in line snippet of code.'
    },
    {
      name: 'Hero',
      route: '/api/components/hero',
      icon: 'photo',
      summary: 'Provides a Hero with a background image, title, and subheading \
      information to your Stache page.'
    },
    {
      name: 'Image',
      route: '/api/components/image',
      icon: 'photo',
      summary: 'Provides a responsive image container.'
    },
    {
      name: 'Tutorial',
      route: '/api/components/tutorial',
      icon: 'book',
      summary: 'Provides a formatted and styled tutorial pattern.'
    },
    {
      name: 'Video',
      route: '/api/components/video',
      icon: 'video-camera',
      summary: 'Provides a responsive container for video embeds.'
    },
    {
      name: 'Include',
      route: '/api/components/include',
      icon: 'photo',
      summary: 'Provides a mechanism for single sourcing static content.'
    },
    {
      name: 'Breadcrumbs',
      route: '/api/components/breadcrumbs',
      icon: 'exchange',
      summary: `Displays a menu at the top of the page to
        help users keep track of their location within the app.`
    },
    {
      name: 'Back to top',
      route: '/api/components/back-to-top',
      icon: 'chevron-up',
      summary: `Provides a quick way to return to the top of a page.`
    },
    {
      name: 'Nav',
      route: '/api/components/nav',
      icon: 'compass',
      summary: `Handles navigation consistently throughout a Stache application.`
    },
    {
      name: 'Table of contents',
      route: '/api/components/table-of-contents',
      icon: 'list-ol',
      summary: 'Generates the inter page navigation using Stache page anchors.'
    },
    {
      name: 'Sidebar',
      route: '/api/components/sidebar',
      icon: 'columns',
      summary: 'Generates the side navigation for the sidebar layout.'
    },
    {
      name: 'Container',
      route: '/api/components/container',
      icon: 'cube',
      summary: 'Wraps content in a Stache container for formatting.'
    },
    {
      name: 'Page header',
      route: '/api/components/page-header',
      icon: 'header',
      summary: `Provides a header for each Stache page.`
    },
    {
      name: 'Page title',
      route: '/api/components/page-header',
      icon: 'header',
      summary: `Provides a title for each Stache page.`
    },
    {
      name: 'Affix top',
      route: '/api/components/affix-top',
      icon: 'wrench',
      summary: `Wraps elements and causes them to affix to the window on scroll.`
    },
    {
      name: 'Markdown',
      route: '/api/components/markdown',
      icon: 'hashtag',
      summary: 'Allows the use of Markdown in Stache 2 projects.'
    }
  ];

  public directives: StacheDemoComponent[] = [
    {
      name: 'Affix top',
      route: '/api/directives/affix-top',
      icon: 'wrench',
      summary: `Causes the affected component to affix to the top of the page.`
    }
  ];

  public getAllSortedByCollection(collection: string): StacheDemoComponent[] {
    return this[collection].sort((a: StacheDemoComponent, b: StacheDemoComponent) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();

      if (nameA < nameB) {
          return -1;
      }

      if (nameA > nameB) {
          return 1;
      }

      return 0;
    });
  }

  public getByName(name: string): StacheDemoComponent {
    return this.components.filter(component => component.name === name)[0];
  }
}
