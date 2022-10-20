function Tempo(props){
    console.log('> Passando pelo front')
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()

    return(
        <div>
            <div>{dynamicDateString}(dinâmico)</div>
            <div>{props.staticDateString}(Estático)</div>
        </div>
    )
}

export async function getStaticProps() {
    console.log('> Passando pelo getStaticProps()')

    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString()


    return{
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo