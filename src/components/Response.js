import React, { useContext } from 'react'
import { RequestContext } from '../contexts/RequestContext'
import TextContextProvider from '../contexts/TextContext';
//import Body from './PageBody';
import Pager from './Pager';
import TextPropsJSON from './TextPagePropsJSON';
import TextRaw from './TextPageRaw';

export default function Response() {
  const { resp, status } = useContext(RequestContext);

  return resp != null ? (
    <div className="Response">
      <TextContextProvider 
        text={resp}
        setText={() => {}}
      >
        <h1>Response</h1>
        <div className="ResponseContent">
          <Pager 
            className="Pager2 BodyPager code"
            pages={[TextRaw, TextPropsJSON] 
            /*
              TODO: Conditionally show TextPropsJSON if data is valid JSON
              Possibly consider HTML page?
            */} 
          />
        </div>
      </TextContextProvider>
    </div>
  ) : (
    <div className="Response EmptyResponse">
      <h1>Response</h1>
      <div 
        className="ResponseContent linebreak EmptyResponse" 
        dangerouslySetInnerHTML={{__html: status}} 
      />
    </div>
  )
  //TODO: Resolve header acquisition
  /*
    <ContentContextProvider 
      header={resp.header}
      body={resp.body}
      setHeader={() => {}}
      setBody={() => {}}
    >
      <Pager 
        className="ResponsePager"
        pages={[ Header, Body ]} 
      />
    </ContentContextProvider>
  */
}
