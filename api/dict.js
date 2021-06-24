import request from '@/utils/request'


const api_name = '/admin/cmn/dict'
export default {
    // ����dictCode��ȡ�¼��ڵ�
    findByDictCode(dictCode){
        return request({
            url: `${api_name}/findByDictCode/${dictCode}`,
            methods: `get`
        })
    },
    // ��������id��ѯ������
    findByParentId(parentId){
        return request({
            url: `${api_name}/findChildData/${parentId}`,
            methods: `get`
        })
    }
}