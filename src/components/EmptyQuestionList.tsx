import { FaComments } from "react-icons/fa";

type EmptyProps = {
    message: string;
}

export default function EmptyQuestionList(props: EmptyProps) {
    return (
        <div className="empty-question-list">
            <FaComments />
            <span>{props.message}</span>
        </div>
    );
}