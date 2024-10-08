import { ChangeEvent, MouseEvent, SetStateAction, useState } from "react";

const UploadMusic = ({
  show,
  handleClose
}: {
  show: boolean,
  handleClose: () => void
}) => {

  // ==== 스타일 ====

  const modalStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  };

  const displayBlockStyle: React.CSSProperties = {
    display: 'flex',
  };

  const displayNoneStyle: React.CSSProperties = {
    display: 'none',
  };

  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyle: React.CSSProperties = {
    background: '#FFFFFF',
    borderRadius: '12px',
    paddingRight: '20px',
    width: '940px',
    height: '600px',
    maxWidth: '90%',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  };

  const modalHeaderStyle: React.CSSProperties = {
    display: 'flex',
    paddingTop: '20px',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  };

  const modalHeaderTextStyle: React.CSSProperties = {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'left',
  };

  const modalCloseStyle: React.CSSProperties = {
    alignSelf: 'right',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  };

  const modalBodyStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
  };

  const leftSectionStyle: React.CSSProperties = {
    borderRadius: '12px 0 0 12px',
    width: '40%',
    height: '600px',
    display: 'flex',
    background: '#323641',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imagePreviewStyle: React.CSSProperties = {
    width: '250px',
    height: '250px',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const fileUploadStyle: React.CSSProperties = {
    position: "relative",
    width:"100%",
    height:"100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:"#FFFFFF",
    border: "0.5px solid #F0F0F0",
    borderRadius: "8px"    
  }

  const hoveredStyle: React.CSSProperties = {
    background: "#F0F0F0",
    color: "#333333",
    fontWeight: 700,
    cursor: "pointer",
    borderRadius: "8px"    
  }

  const filenameStyle: React.CSSProperties = {
    color: '#FFFFFF',
  };

  const rightSectionStyle: React.CSSProperties = {
    width: '60%',
    maxHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
  };

  const formGroupStyle: React.CSSProperties = {
    marginBottom: '20px',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#888888',
  };

  const textInputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #CCCCCC',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#333333',
  };

  const licenseInputStyle: React.CSSProperties = {
    width: '96%',
    height: 'auto',
    padding: '10px',
    border: '1px solid #CCCCCC',
    borderRadius: '8px',
    resize: 'none',
  };

  const genreOptionsStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  };

  const genreOptionStyle: React.CSSProperties = {
    background: '#F0F0F0',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#666666',
  };

  const genreOptionSelectedStyle: React.CSSProperties = {
    background: '#8A2BE2',
    color: '#FFFFFF',
  };

  const agreementStyle: React.CSSProperties = {
    width: '96%',
    height: 'auto',
    padding: '10px',
    border: '1px solid #CCCCCC',
    borderRadius: '8px',
    resize: 'none',
  };

  const submitButtonStyle: React.CSSProperties = {
    width: '100%',
    background: '#8A2BE2',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '20px',
  };

  // ====

  const showHideClassName = show ? { ...modalStyle, ...displayBlockStyle } : { ...modalStyle, ...displayNoneStyle };

  const handleBackgroundClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };
  // 장르클릭 핸들러
  const [selectedGenre, setSelectedGenre] = useState("Rock");

  const genres = [
    "Rock",
    "Electronic",
    "Hip-Hop",
    "Jazz",
    "Classical",
    "Sound Track",
    "Pop",
    "R&B/Soul",
  ];
  //genre 속성 정의해야함 우선 string으로
  const genreClickHandler = (genre: SetStateAction<string>) => {
    setSelectedGenre(genre);
  };

  // 분위기 클릭 핸들러
  const [selectedMood, setSelectedMood] = useState("Gloomy");

  const moods = [
    "Gloomy",
    "Dreamer",
    "Dark",
    "Angry",
    "Classical",
    "Sound Track",
    "Pop",
    "R&B/Soul",
  ];

  const moodClickHandler = (mood: SetStateAction<string>) => {
    setSelectedMood(mood);
  };

  const [songFile, setSongFile] = useState<File>();
  const [coverFile, setCoverFile] = useState('');

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
      (file && file.length > 0) && setSongFile(file[0]);
  }

  const onCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if(file && file.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        reader.result && setCoverFile(reader.result.toString());
      }
      reader.readAsDataURL(file[0]);
    }
  }

  const [ishovered, setIsHovered] = useState('unhovered');

  return (
    <div style={showHideClassName} onClick={handleBackgroundClick}>
      <div style={modalOverlayStyle}>
        <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
          <div style={modalBodyStyle}>
            <div style={leftSectionStyle}>
              <div
                className="image-preview"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <input
                  type="file"
                  id="cover-file-upload"
                  accept="image/*"
                  onChange={onCoverChange}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer"
                  }}
                  hidden/>
                <label htmlFor="cover-file-upload" style={{cursor:"pointer"}}>
                  <img
                    src={coverFile ? coverFile : "/images/default/song_default.png"}
                    style={coverFile ? imagePreviewStyle : {...imagePreviewStyle, opacity:"0.3"}}
                    alt="Preview"
                  />
                </label>
                {!coverFile && (
                  <img
                    src="/images/song/file-upload-icon-white.png"
                    style={{
                      position:"absolute",
                      left:"50%",
                      top:"50%",
                      transform:"translate(-50%, -50%)",
                      width: "60px",
                      height: "60px",
                    }}
                  />
                )}
              </div>

              <div className="music-file"
          style={{
            width:"250px",
            height:"70px"
          }}
          >
            <div className="file-upload"
              onMouseOver={()=>{setIsHovered('hovered')}}
              onMouseLeave={()=>{setIsHovered('unhovered')}}
              style={ ishovered === 'hovered'? {...fileUploadStyle, ...hoveredStyle} : {...fileUploadStyle}}
            >
              <label htmlFor="song-file-upload"
                className="file-upload-box"
                style={{
                  display: "block",
                  cursor: "pointer"
                }}>
              <p className="song-file-name">{songFile ? songFile.name : "음원 업로드"}</p>
              <input 
                type="file"
                id="song-file-upload"
                accept="audio/*"
                onChange={onFileChange}
                className="song-file-input"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer"
                }}/>
              </label> 
            </div>
        </div>
            </div>
            <div style={rightSectionStyle}>
              <div style={modalHeaderStyle}>
                <p style={modalHeaderTextStyle}>내 음원 업로드하기</p>
                <button style={modalCloseStyle} onClick={handleClose}>
                  ✕
                </button>
              </div>

              <div className="form-container" style={{ overflowY: "auto", textAlign: "start" }}>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>*제목</label>
                  <input
                    type="text"
                    placeholder="곡 제목을 입력해주세요"
                    style={textInputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>*제작자</label>
                  <input
                    type="text"
                    placeholder="곡 제작자를 입력해주세요"
                    style={textInputStyle}
                  />
                </div>

                <div style={formGroupStyle}>
                  <label style={labelStyle}>곡 설명</label>
                  <input
                    type="text"
                    placeholder="곡 설명을 입력해주세요"
                    style={textInputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>라이센스</label>
                  <textarea
                    placeholder="라이센스를 입력해주세요"
                    rows={5}
                    style={licenseInputStyle}
                  />
                </div>

                <div style={formGroupStyle}>
                  <label style={labelStyle}>*장르를 선택해 주세요.</label>
                  <div style={genreOptionsStyle}>
                    {genres.map((genre) => (
                      <button
                        key={genre}
                        style={
                          selectedGenre === genre
                            ? { ...genreOptionStyle, ...genreOptionSelectedStyle }
                            : genreOptionStyle
                        }
                        onClick={() => genreClickHandler(genre)}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={formGroupStyle}>
                  <label style={labelStyle}>*분위기를 선택해 주세요.</label>
                  <div style={genreOptionsStyle}>
                    {moods.map((mood) => (
                      <button
                        key={mood}
                        style={
                          selectedMood === mood
                            ? { ...genreOptionStyle, ...genreOptionSelectedStyle }
                            : genreOptionStyle
                        }
                        onClick={() => moodClickHandler(mood)}
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                  <div style={formGroupStyle}>
                    <label style={labelStyle}>업로드 이용약관</label>
                    <textarea
                      rows={5}
                      style={agreementStyle}
                      readOnly
                      value={`제1조 [목적]
이 약관은 ㈜사운드캐스트(이하 “회사”)와 “이용자” 간에 “회사”가 제공하는 콘텐츠 서비스인 사운드 캐스트 및 제반 서비스를 이용함에 있어 “회사”와 “이용자” 간의 권리, 의무에 관한 사항과 기타 필요한 사항을 규정하는 것을 목적으로 합니다.
                        
제2조 (정의)
① “서비스”란 음원을 회원에게 배포하기 위해 회사에서 제공하는 홈페이지를 포함한 제반 서비스를 의미합니다.
② “이용자”라 함은 “회사”가 제공하는 “서비스”에 유선 또는 무선 인터넷 등의 수단으로 접속하여 이 약관에 따라 “회사”가 제공하는 “콘텐츠” 및 제반 서비스를 이용하는 “회원” 및 “비회원”을 말합니다.
③ “음원”이란 회사에서 제공하는, 회원이 개인적으로 사용할 수 있는 라이브러리 음원을 의미합니다.
④ “영상이모티콘”이란 회사에서 제작, 제공하는 영상편집 소스(MP4, GIF)파일을 의미합니다.
⑤ “콘텐츠”란 “회사”에서 제공하는 모든 음원 및 영상이모티콘을 의미합니다.`}
                    />
                  </div>
                </div>
                <button style={submitButtonStyle}>수정</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadMusic;
