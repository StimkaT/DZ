import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { LayoutComponent } from './layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<LayoutComponent> = {
  title: 'UI Components/LayoutComponent',
  component: LayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatSidenavModule, BrowserAnimationsModule],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: LayoutComponent) => ({
    template:  `<layout>
        <div catalogButtolnList>test</div>
        <div cardList>test2</div>
        </layout>`,
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<LayoutComponent>;

export const Primary: Story = {
  args: {
  },
};
