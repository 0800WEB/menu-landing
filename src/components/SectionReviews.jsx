import FloatingActionBar from './FloatingActionBar'
import cellPhone from '../assets/images/cell-phone-coupon.png'
import CardReview from './CardReview'
import { reviewData1 } from '../assets/other-assets/reviewsMock'
import { reviewData2 } from '../assets/other-assets/reviewsMock'
import { reviewData3 } from '../assets/other-assets/reviewsMock'

const SectionReviews = () => {
    return (
        <div className='sm:h-screen flex flex-col relative border border-blue-500'>
            <div className='flex justify-between sm:flex-row pt-[41px] gap-9'>
                <div className='w-[50%] flex justify-end relative shrink-0'>
                    <img className='md:h-full lg:h-[97%]' src={cellPhone} alt="Cellphone Review Coupon" />
                    <div className='absolute top-[10%] right-0 justify-evenly flex flex-col gap-[45.3px] w-full'>
                        <div className='self-end'>
                            <CardReview photoProfile={reviewData2.photoProfile} review={reviewData2.review} rating={reviewData2.rating} />
                        </div>
                        <div>

                            <CardReview photoProfile={reviewData1.photoProfile} review={reviewData1.review} rating={reviewData1.rating} />
                        </div>
                        <div className='self-end'>
                            <CardReview photoProfile={reviewData3.photoProfile} review={reviewData3.review} rating={reviewData3.rating} />
                        </div>
                    </div>
                </div>
                <div className='sm:pt-16 lg:pt-[84px] lg:pl-[30px] xl:pl-[40px] 2xl:pl-[60px]'>
                    <div className='flex flex-col gap-[18px] w-max-[581px]'>
                        <h2 className='text-[44px] lg:text-5xl xl:text-6xl leading-[50px] lg:leading-[70px] font-extrabold tracking-custom-3p'>¡CALIFICA Y GANA <span className='text-highlight'>DESCUENTOS!</span></h2>
                        <p className='text-base lg:text-lg xl:text-xl leading-[32px] tracking-custom-3p text-balance '>
                            Califica los platillos que pruebes y acumula puntos por tus valoraciones.
                            ¡Entre más opinas, más ganas! Con esos puntos, desbloquea cupones de descuento exclusivos para tus próximos pedidos.
                            No solo compartes tus opiniones con otros, también obtienes grandes beneficios. ¡Explora, valora y ahorra con cada comida!"
                        </p>
                    </div>
                </div>

            </div>
            <FloatingActionBar />
        </div>
    )
}

export default SectionReviews