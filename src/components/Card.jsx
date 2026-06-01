function Card({children,bg=`bg-gray-100`}) {
    return(
         <div className={` ${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}
export default Card

// children = any content placed between <Card> and </Card>
// Without {children}, the content inside <Card> will not appear.
//// bg: optional background class prop, defaults to "bg-gray-100"