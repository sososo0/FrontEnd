import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import CommentBox from "../ui/CommentBox";
import { Button } from '@mui/material';
import { CountertopsSharp } from "@mui/icons-material";

//화면의 중앙에 위치시킴
const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

/*const CreateList = () => {
    const [countList, setCountList] = useState([0])

    function onAddWrite(){
        let countArr = [...countList]
        let counter = countArr.slice(-1)[0]
        counter += 1
        CountertopsSharp.push(counter)
        setcountList(countArr)

    }    
}

<TextInput>
                    {props.countList && props.countList.map((item, i) => (
                        <div key={i}>
                        height={480}
                        value={content}
                        placeholder={'내용을 입력하세요'}
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}
                    </div>
                    ))}
                </TextInput>
*/


function WritePage(props) {
    const navigate = useNavigate();

    const [title, SetTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <Wrapper>
            <Container>
                <TextInput>
                    height={20}
                    value={title}
                    placeholder={'제목을 입력하세요'}
                    onChange={(event) => {
                        SetTitle(event.target.value);
                    }}
                </TextInput>

                <TextInput>
                    height={480}
                    value={content}
                    placeholder={'내용을 입력하세요'}
                    onChange={(event) => {
                        setContent(event.target.value);                        
                    }}   
                </TextInput>

                <Button 
                type="submit" 
                variant="outlined" 
                sx={{ //css 적용
                    mt: 3,
                    pr: 11,
                    pl: 11,
                    color: 'white',
                    border: '1px solid skyblue',
                    borderRadius: '10px',
                    backgroundColor: 'skyblue',
                    // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                    // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                    "&.MuiButton-root:hover":{
                    color: 'skyblue',
                    borderColor: 'skyblue'
                    }
                }}
                onClick={() => {}}>글 추가
                </Button>
                
                <Button 
                type="submit" 
                variant="outlined" 
                sx={{ //css 적용
                    mt: 3,
                    pr: 11,
                    pl: 11,
                    color: 'white',
                    border: '1px solid skyblue',
                    borderRadius: '10px',
                    backgroundColor: 'skyblue',
                    // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                    // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                    "&.MuiButton-root:hover":{
                    color: 'skyblue',
                    borderColor: 'skyblue'
                    }
                }}
                onClick={() => {
                    navigate("/main");
                }}>임시 저장</Button>

                <Button 
                type="submit" 
                variant="outlined" 
                sx={{ //css 적용
                    mt: 3,
                    pr: 11,
                    pl: 11,
                    color: 'white',
                    border: '1px solid skyblue',
                    borderRadius: '10px',
                    backgroundColor: 'skyblue',
                    // "&.Mui[mui이름]-root:[event 속성]" : {}로 기본적으로 적용된 css를 변경시킬 수 있다.
                    // "&.MuiButton-root:hover" : {}로 기본적으로 탑재되어있는 css를 바꿈
                    "&.MuiButton-root:hover":{
                    color: 'skyblue',
                    borderColor: 'skyblue'
                    }
                }}
                onClick={() => {
                    navigate("/main");
                }}>글 올리기</Button>

                <CommentBox></CommentBox>
                
            </Container>
        </Wrapper>
    );
}

export default WritePage;