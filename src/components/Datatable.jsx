import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';

export default function MarksTable() {
    const courses = [
        { id: 1, name: 'هندسة حيوية', code: '1100', ثابت: '5/30' },
        { id: 2, name: 'هندسة كيميا', code: '1200', ثابت: '1/30' },
        { id: 3, name: 'هندسة الحاسوب', code: '1440', ثابت: '3/35' },
        { id: 4, name: 'الهندسة الطبية الحيوية', code: '1220', ثابت: '19/35' },
        { id: 5, name: 'هندسة الكهرباء', code: '1100', ثابت: '5/35' },
        { id: 6, name: 'هندسة الإلكترونيات والاتصالات', code: '1170', ثابت: '9/35' },
        { id: 7, name: 'هندسة التحكم والأتمتة', code: '1180', ثابت: '10/35' },
        { id: 8, name: 'هندسة الرياضيات', code: '1190', ثابت: '5/30' },
        { id: 9, name: 'هندسة المعادن والمواد', code: '1180', ثابت: '3/40' },
        { id: 10, name: 'هندسة صناعية تركي', code: '1170', ثابت: '8/25' },
        { id: 11, name: 'هندسة صناعية انجليزي', code: '1330', ثابت: '7/35' },
        { id: 12, name: 'هندسة ميكانيكية', code: '1180', ثابت: '4/25' },
        { id: 13, name: 'هندسة ميكاترونيكس تركي', code: '1180', ثابت: '3/20' },
        { id: 14, name: 'هندسة ميكاترونيكس انجليزي', code: '1310', ثابت: '8/25' },
        { id: 15, name: 'إدارة الأعمال', code: '1250', ثابت: '5/35' },
        { id: 16, name: 'هندسة عمارة انجليزي', code: '1330', ثابت: '4/30' },
        { id: 17, name: 'هندسة عمارة تركي', code: '1130', ثابت: '2/20' },
        { id: 18, name: 'هندسة مدنية انجليزي', code: '1190', ثابت: '6/30' },
        { id: 19, name: 'هندسة رياضيات تركي', code: '1230', ثابت: '1/20' }
    ];

    // State for global filter
    const [globalFilter, setGlobalFilter] = useState('');

    const pageNumbers = [
        63, 70, 58, 52, 60, 54, 56, 67, 73, 88, 88, 90, 92, 92, 17, 42, 42, 81,67
    ];
    const sectionDefButton = (rowData) => {
        const page = pageNumbers[rowData.id - 1];
        return (
            <Link
                to={`/majors-details?page=${page}`}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                target="_blank"
                rel="noopener noreferrer"
            >
                تعريف القسم
            </Link>
        );
    };

    return (
        <div className="card max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow text-lg">
    <div className="mb-4 flex justify-end">
        <input
            type="text"
            placeholder="ابحث..."
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64 text-right text-lg rtl"
        />
    </div>

    <div className="scale-[0.85] sm:scale-100 origin-top-right transition-transform">
        <DataTable
            value={courses}
            rows={10}
            dataKey="id"
            emptyMessage="لا توجد بيانات"
            globalFilter={globalFilter}
            className="text-right text-lg"
            filterDisplay="row"
            dir="rtl"
            tableClassName="border border-gray-300"
        >
            <Column field="name" header={<span className="text-right w-full block">القسم</span>} style={{ minWidth: '12rem' }} />
            <Column field="code" header={<span className="text-right w-full block">الدرجة</span>} style={{ minWidth: '6rem' }} sortable />
            <Column field="ثابت" header={<span className="text-right w-full block">عدد المثبتين</span>} style={{ minWidth: '8rem' }} />
            <Column body={sectionDefButton} header={<span className="text-right w-full block">تعريف القسم</span>} style={{ minWidth: '8rem' }} />
        </DataTable>
    </div>
</div>
    );
}
