import React from 'react'
export default class FAQPage extends React.Component{
  render() {
    return (
      <div>
        {/* include pace script for automatic web page progress bar  */}
        <div id="wrapper">
          {/* /.header */}
          <div className="intro-inner">
            <div className="about-intro" style={{background: 'url(assets/img/bg2.jpg) no-repeat center', backgroundSize: 'cover'}}>
              <div className="dtable hw100">
                <div className="dtable-cell hw100">
                  <div className="container text-center">
                    <h1 className="intro-title animated fadeInDown"> Frequently Asked Questions </h1>
                  </div>
                </div>
              </div>
            </div>
            {/*/.about-intro */}
          </div>
          {/* /.intro-inner */}
          <div className="main-container inner-page">
            <div className="container">
              <div className="section-content">
                <div className="row ">
                  <h1 className="text-center title-1"> classified ads <strong>FAQ</strong></h1>
                  <hr className="center-block small text-hr" />
                </div>
                <div className="faq-content">
                  <div aria-multiselectable="true" role="tablist" id="accordion" className="panel-group faq-panel">
                    <div className="panel">
                      <div id="headingOne" role="tab" className="panel-heading">
                        <h4 className="panel-title">
                          <a aria-controls="collapseOne" aria-expanded="true" href="#collapseOne" data-parent="#accordion" data-toggle="collapse">
                            How do I place an ad?
                          </a>
                        </h4>
                      </div>
                      <div aria-labelledby="headingOne" role="tabpanel" className="panel-collapse collapse in" id="collapseOne">
                        <div className="panel-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit
                          amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat
                          mattis lorem, lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis
                          ac dictum tellus
                          <br /><br />
                          Pellentesque in mauris placerat, porttitor lorem id, ornare nisl. Pellentesque
                          rhoncus convallis felis, in egestas libero. Donec et nibh dapibus, sodales nisi
                          quis, fringilla augue. Donec dui quam, egestas in varius ut, tincidunt quis ipsum.
                          Nulla nec odio eu nisi imperdiet dictum.
                          <br /><br />
                          Curabitur sed leo dictum, convallis lorem eu, suscipit mi. Mauris viverra blandit
                          varius. Proin non sem turpis. Etiam fringilla hendrerit nunc at accumsan. Duis
                          mollis auctor lobortis.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div id="headingTwo" role="tab" className="panel-heading">
                        <h4 className="panel-title">
                          <a aria-controls="collapseTwo" aria-expanded="false" href="#collapseTwo" data-parent="#accordion" data-toggle="collapse" className="collapsed">
                            What does it cost to advertise?
                          </a>
                        </h4>
                      </div>
                      <div aria-labelledby="headingTwo" role="tabpanel" className="panel-collapse collapse" id="collapseTwo">
                        <div className="panel-body">
                          Curabitur sed leo dictum, convallis lorem eu, suscipit mi. Mauris viverra blandit
                          varius. Proin non sem turpis. Etiam fringilla hendrerit nunc at accumsan. Duis
                          mollis auctor lobortis.
                          <br /><br />
                          Etiam elementum nulla non erat blandit, sed porttitor urna malesuada. Cras euismod a
                          nulla sed ornare. Vestibulum id molestie nulla. Phasellus sodales, sapien vitae
                          auctor rhoncus
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div id="headingThree" role="tab" className="panel-heading">
                        <h4 className="panel-title">
                          <a aria-controls="collapseThree" aria-expanded="false" href="#collapseThree" data-parent="#accordion" data-toggle="collapse" className="collapsed">
                            If I post an ad, will I also get more spam e-mails?
                          </a>
                        </h4>
                      </div>
                      <div aria-labelledby="headingThree" role="tabpanel" className="panel-collapse collapse" id="collapseThree">
                        <div className="panel-body">
                          Pellentesque in mauris placerat, porttitor lorem id, ornare nisl. Pellentesque
                          rhoncus convallis felis, in egestas libero. Donec et nibh dapibus, sodales nisi
                          quis, fringilla augue. Donec dui quam, egestas in varius ut, tincidunt quis ipsum.
                          Nulla nec odio eu nisi imperdiet dictum.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div id="heading_04" role="tab" className="panel-heading">
                        <h4 className="panel-title">
                          <a aria-controls="collapse_04" aria-expanded="false" href="#collapse_04" data-parent="#accordion" data-toggle="collapse" className="collapsed">
                            How long will my ad remain on the website?
                          </a>
                        </h4>
                      </div>
                      <div aria-labelledby="heading_04" role="tabpanel" className="panel-collapse collapse" id="collapse_04">
                        <div className="panel-body">
                          Pellentesque in mauris placerat, porttitor lorem id, ornare nisl. Pellentesque
                          rhoncus convallis felis, in egestas libero. Donec et nibh dapibus, sodales nisi
                          quis, fringilla augue. Donec dui quam, egestas in varius ut, tincidunt quis ipsum.
                          Nulla nec odio eu nisi imperdiet dictum.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div id="heading_05" role="tab" className="panel-heading">
                        <h4 className="panel-title">
                          <a aria-controls="collapse_05" aria-expanded="false" href="#collapse_05" data-parent="#accordion" data-toggle="collapse" className="collapsed">
                            I sold my item. How do I delete my ad?
                          </a>
                        </h4>
                      </div>
                      <div aria-labelledby="heading_05" role="tabpanel" className="panel-collapse collapse" id="collapse_05">
                        <div className="panel-body">
                          Pellentesque in mauris placerat, porttitor lorem id, ornare nisl. Pellentesque
                          rhoncus convallis felis, in egestas libero. Donec et nibh dapibus, sodales nisi
                          quis, fringilla augue. Donec dui quam, egestas in varius ut, tincidunt quis ipsum.
                          Nulla nec odio eu nisi imperdiet dictum.
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div id="heading_06" role="tab" className="panel-heading">
                        <h4 className="panel-title">
                          <a aria-controls="collapse_06" aria-expanded="false" href="#collapse_06" data-parent="#accordion" data-toggle="collapse" className="collapsed">
                            What is a wish list?
                          </a>
                        </h4>
                      </div>
                      <div aria-labelledby="heading_06" role="tabpanel" className="panel-collapse collapse" id="collapse_06">
                        <div className="panel-body">
                          Curabitur sed leo dictum, convallis lorem eu, suscipit mi. Mauris viverra blandit
                          varius. Proin non sem turpis. Etiam fringilla hendrerit nunc at accumsan. Duis
                          mollis auctor lobortis.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.main-container */}
          <div className="parallaxbox about-parallax-bottom">
            <div className="container">
              <div className="row text-center featuredbox">
                <div className="col-sm-4 xs-gap">
                  <div className="inner">
                    <div className="icon-box-wrap"><i className="icon-book-open ln-shadow-box shape-3" /></div>
                    <h3 className="title-4">herausragendes Beispiel</h3>
                    <p>Ein herausragendes Beispiel für Story-Telling im modernen Webdesign. et suscipit sapien
                      posuere quis. Maecenas ut iaculis nunc, eget efficitur ipsum. Nam vitae hendrerit
                      tortor.</p>
                  </div>
                </div>
                <div className="col-sm-4 xs-gap">
                  <div className="inner">
                    <div className="icon-box-wrap"><i className=" icon-lightbulb ln-shadow-box shape-2" /></div>
                    <h3 className="title-4">Fusce ex ipsum</h3>
                    <p>Ein herausragendes Beispiel für Story-Telling im modernen Webdesign. et suscipit sapien
                      posuere quis. Maecenas ut iaculis nunc, eget efficitur ipsum. Nam vitae hendrerit tortor.
                      .</p>
                  </div>
                </div>
                <div className="col-sm-4 xs-gap">
                  <div className="inner">
                    <div className="icon-box-wrap"><i className="icon-megaphone ln-shadow-box shape-7" /></div>
                    <h3 className="title-4">Pellentesque rhoncus </h3>
                    <p>Ein herausragendes Beispiel für Story-Telling im modernen Webdesign. et suscipit sapien
                      posuere quis. Maecenas ut iaculis nunc, eget efficitur ipsum. Nam vitae hendrerit
                      tortor. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.footer */}
        </div>
        {/* /.wrapper */}
        {/* Le javascript
================================================== */}
        {/* Placed at the end of the document so the pages load faster */}
        {/* include carousel slider plugin  */}
        {/* include form-validation plugin || add this script where you need validation   */}
        {/* include equal height plugin  */}
        {/* include jquery list shorting plugin plugin  */}
        {/* include jquery.fs plugin for custom scroller and selecter  */}
        {/* include custom script for site  */}
      </div>
    )
  }
}