import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'simple-circular-progress',
  styleUrl: 'simple-circular-progress.css',
  shadow: true,
})
export class SimpleCircularProgress {
  @Prop() progressPercentage: string = '10';
  @Prop() progressColor: string = '#2ecc71';
  @Prop() progressStrokeColor: string = '#e4e4e4ee';
  @Prop() label: string = '';
  @Prop() labelFontSize: string = '1.5rem';
  @Prop() hideLabel: boolean = false;

  render() {
    return (
      <div
        style={{
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          background: `conic-gradient(${this.progressColor} ${this.progressPercentage}%, 0, ${this.progressStrokeColor} ${(100 - parseInt(this.progressPercentage)).toString()}%)`,
          borderRadius: `50%`,
          boxShadow: `inset 1px 1px 4px 1px`,
        }}
      >
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            textAlign: `center`,
            justifyContent: `center`,
            backgroundColor: `#fff`,
            height: `80%`,
            width: `80%`,
            borderRadius: `50%`,
            boxShadow: `0px 0px 7px 0px rgba(0, 0, 0, 0.1)`,
          }}
        >
          {(() => {
            if (!this.hideLabel) {
              return (
                <span
                  style={{
                    fontFamily: `"Helvetica Neue", Helvetica, Arial, Verdana, sans-serif`,
                    fontSize: `${this.labelFontSize}`,
                    fontWeight: `lighter`,
                  }}
                  innerHTML={this.label === '' || this.label === undefined || this.label === null ? this.progressPercentage + '%' : this.label}
                ></span>
              );
            }
          })()}
        </div>
      </div>
    );
  }
}
