import React from 'react';
import styled from 'styled-components';
import Checkout from './Checkout';
import Services from './Services/Services';
import TourBanner from './TourBanner';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
`;
const ContentContainer = styled.div`
    border-radius: 10px;

    width: 90vw;
    height: 95vh;
    box-shadow: 2px 12px 20px -3px ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
`;

const Desription = styled.div`
    color: ${(props) => props.theme.text};
    top: 1rem;
    padding: 0 5rem;
    p {
    }
    h3 {
        padding-bottom: 0.5rem;
        text-decoration: underline;
        font-weight: 700;
        font-size: ${(props) => props.theme.fontxl};
    }
`;

const TourInfo = () => {
    return (
        <Section>
            <ContentContainer>
                <TourBanner
                    name='Phú Quốc'
                    loc='12N* ád2 1231'
                    imgSrc='https://picsum.photos/500/400?random=1'
                />
                <Desription>
                    <h3>Giới thiệu sơ lược: </h3>
                    <p>
                        Chỗ nghỉ này cách bãi biển 3 phút đi bộ. Nằm cách Bãi
                        Sau 550 m, Căn hộ Melody Vũng Tàu có sảnh khách chung
                        cũng như chỗ nghỉ gắn máy điều hòa với sân hiên và WiFi
                        miễn phí. Căn hộ tại đây có ban công, tầm nhìn ra hồ
                        nước, khu vực ghế ngồi, TV truyền hình vệ tinh màn hình
                        phẳng, bếp đầy đủ tiện nghi với lò vi sóng cùng tủ lạnh
                        cũng như phòng tắm riêng đi kèm vòi xịt/chậu rửa vệ sinh
                        và dép đi trong phòng. Các căn còn được trang bị lò
                        nướng, bếp nấu ăn và ấm đun nước. Các điểm tham quan nổi
                        tiếng gần Căn hộ Melody Vũng Tàu gồm có Bãi Dứa, Bãi
                        Trước và Tượng Chúa Kitô Vua. Sân bay gần nhất là sân
                        bay quốc tế Tân Sơn Nhất, cách đó 108 km, và chỗ nghỉ
                        cung cấp dịch vụ đưa đón sân bay với một khoản phụ phí.
                    </p>
                </Desription>
            </ContentContainer>
            <Services />
            <Checkout />
        </Section>
    );
};

export default TourInfo;
