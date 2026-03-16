"use client"
import { Accordion } from "react-bootstrap"

interface AccordionItem {
  key: string
  title: string
  delay?: string
  content?: string
}

interface AccordionBlogProps {
  items?: AccordionItem[]
}

const AccordionBlog = ({ items }: AccordionBlogProps) =>{
    const defaultItems: AccordionItem[] = [
        { key: "0", title: 'How much do you charge for pedicure ?' },
        { key: "1", title: 'What types of treatments do you offer?' },
        { key: "2", title: 'How do i book my appointment ?' },
        { key: "3", title: 'Can i cancel my appointment ?' },
    ]
    const list = items ?? defaultItems
    return(
        <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
            {list.map((data, i) => (
                <Accordion.Item eventKey={data.key} key={i} className="wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.7s">
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                        {data.content ?? "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}
export default AccordionBlog;