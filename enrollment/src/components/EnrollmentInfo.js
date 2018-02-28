import React from 'react';

export default class EnrollmentInfo extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick}>
                <table border={1}>
                    <tr>
                        <td>
                            {this.props.enrollment.name}
                        </td>
                        <td>
                            {this.props.enrollment.phone}
                        </td>
                        <td>
                            {this.props.enrollment.stuId}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}