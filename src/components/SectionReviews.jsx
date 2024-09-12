import FloatingActionBar from './FloatingActionBar'
import cellPhone from '../assets/images/cell-phone-coupon.png'
import CardReview from './CardReview'
import { reviewData1 } from '../assets/other-assets/reviewsMock'
import { reviewData2 } from '../assets/other-assets/reviewsMock'
import { reviewData3 } from '../assets/other-assets/reviewsMock'

const SectionReviews = () => {
    return (
        <div className='h-dvh md:h-screen flex flex-col relative'>
            <div className='h-full md:h-full flex justify-end md:justify-between flex-col-reverse md:flex-row pt-16 md:pt-10 gap-6 md:gap-8'>
                <div className='animation overflow-hidden md:overflow-visible md:h-full md:w-1/2 lg:w-[60%] flex justify-center md:justify-center relative pl-5 md:pl-0'>
                    <img className='h-[90%] md:size-fit md:max-h-[42rem] md:max-w-[29rem]' src={cellPhone} alt="Cellphone Review Coupon" />
                    <div className='absolute top-[8%] h-[60%] md:h-96 md:top-[15%] lg:top-[10%] xl:right-1/4 flex flex-col justify-between gap-5 md:gap-11 [&>div]:w-max'>
                        <CardReview photoProfile={reviewData2.photoProfile} review={reviewData2.review} rating={reviewData2.rating} />
                        <div className='-translate-x-3/4 md:translate-x-0 md:hidden lg:block lg:-translate-x-1/2 '>
                            <CardReview photoProfile={reviewData1.photoProfile} review={reviewData1.review} rating={reviewData1.rating} />
                        </div>
                        <CardReview photoProfile={reviewData3.photoProfile} review={reviewData3.review} rating={reviewData3.rating} />
                    </div>
                </div>
                <div className='md:w-1/2 md:pt-[5.25rem] [&_p]:text-pretty [&_p]:leading-5 md:[&_p]:leading-8 [&_p]:tracking-custom-3p [&_p]:text-xs [&_p]:sm:text-base  [&_p]:lg:text-lg [&_p]:xl:text-xl'>
                    <div className='flex flex-col gap-[1.125rem] pr-4 pb-4 md:p-0'>
                        <h2 className='font-extrabold tracking-custom-3p text-2xl sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-6xl leading-[3.125rem] lg:leading-[4.25rem]'>¡CALIFICA Y GANA <span className='text-highlight'>DESCUENTOS!</span></h2>
                        <p >
                            Califica los platillos que pruebes y acumula puntos por tus valoraciones.
                            ¡Entre más opinas, más ganas! Con esos puntos, desbloquea cupones de descuento exclusivos para tus próximos pedidos.
                            No solo compartes tus opiniones con otros, también obtienes grandes beneficios. ¡Explora, valora y ahorra con cada comida!
                        </p>
                    </div>
                </div>

            </div>
            <FloatingActionBar />
        </div>
    )
}

export default SectionReviews