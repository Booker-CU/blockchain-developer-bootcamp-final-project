export default function MyComponent(props) {
    return (
      <>
        <div className="div">
          <div className="div-2" />
          <div className="cryptowalletpic-clean-white">
            <picture>
              <source
                srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812"
                type="image/webp"
              />

              <img
                src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fdd0693675ee04211a47445ff35171812"
                className="image"
              />
            </picture>

            <div className="builder-image-sizer image-sizer" />
          </div>
        </div>
        <style jsx>{`
          .div {
            display: flex;
            max-width: 566px;
          }
          .div-2 {
            display: flex;
            max-width: 566px;
            height: 74.51775360107422px;
            width: 566px;
            border-radius: 20.93195152282715px;
            background-color: rgba(46, 58, 120, 0.5799999833106995);
          }
          .cryptowalletpic-clean-white {
            display: flex;
            position: relative;
            min-width: 20px;
            min-height: 20px;
            max-width: 50px;
            width: 50px;
          }
          .image {
            object-fit: cover;
            object-position: center;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
          }
          .image-sizer {
            width: 100%;
            padding-top: 88.52458953857422%;
            pointer-events: none;
            font-size: 0;
          }
        `}</style>
      </>
    );
  }


  