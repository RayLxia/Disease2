<?php
/**
 * �������
 *
 * @version        $Id: task_do.php 1 23:07 2010��7��20��Z tianya $
 * @package        DedeCMS.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require(dirname(__FILE__).'/config.php');
$dopost = (!isset($dopost) ? '' : $dopost);
/******************************
���ص���һ�����URL
�������������֪�����ã������������񴫵���ռ��
f ��ʱ����Ϊ�˷�����ַ�ṹ
dopost ��ǰ����(ָ����һ������)�� ���û����д������ nextdo ���Զ����
del ��һ������ɾ���ı���
morejob ���趨�󣬱�ʾ��ǰ�����������Σ���� dopost �� nextdo �����תΪ doposttmp, nextdotmp��Ȼ�����û����д���
******************************/
function GetNextUrl($notallowArr = array('dopost', 'f', 'del'))
{
    $reurl = "task_do.php?f=0";
    foreach($_GET as $k=>$v)
    {
        if($k=='nextdo')
        {
            $nextdo = '';
            $nextdos = explode(',', $GLOBALS[$k]);
            if(isset($nextdos[1]))
            {
                for($i=1; $i < count($nextdos); $i++)
                {
                    if( trim($nextdos[$i]) == '' ) continue;
                    $nextdo .= ($nextdo=='' ? $nextdos[$i] : ','.$nextdos[$i]);
                }
            }
            //���ϵͳ�ж������� ����һ����������б�����ύ��������
            if( in_array('morejob', $notallowArr) )
            {
                $reurl .= "&doposttmp=".$nextdos[0];
                if($nextdo != '') $reurl .= "&nextdotmp=$nextdo";
            }
            else
            {
                $reurl .= "&dopost=".$nextdos[0];
                if($nextdo != '') $reurl .= "&nextdo=$nextdo";
            }
        }
        else if( in_array($k, $notallowArr) )
        {
            continue;
        }
        else
        {
            $reurl .= "&{$k}=".urlencode($GLOBALS[$k]);
        }
    }
    return $reurl;
}
/******************************
//������һƪ����һƪ
function makeprenext() {  }
******************************/
if($dopost=='makeprenext')
{
    require_once(DEDEINC.'/arc.archives.class.php');
    $aid = intval($aid);
    $preRow =  $dsql->GetOne("SELECT id FROM `#@__arctiny` WHERE id<$aid AND arcrank>-1 AND typeid='$typeid' ORDER BY id DESC");
    $nextRow = $dsql->GetOne("SELECT id FROM `#@__arctiny` WHERE id>$aid AND arcrank>-1 AND typeid='$typeid' ORDER BY id ASC");
    if(is_array($preRow))
    {
        $envs['aid'] = $preRow['id'];
        $arc = new Archives($preRow['id']);
        $arc->MakeHtml();
    }
    if(is_array($nextRow))
    {
        $envs['aid'] = $nextRow['id'];
        $arc = new Archives($nextRow['id']);
        $arc->MakeHtml();
    }
    if( empty($nextdo) )
    {
        ShowMsg("<b>�������ƪ�ĵ���������������и�������</b>", "close::tgtable");
        exit();
    }
    else
    {
        $jumpurl = GetNextUrl();
        ShowMsg("�����ƪ�ĵ��������� ����ִ����������...", $jumpurl,0,500);
        exit();
    }
}
/******************************
//������ҳ������
function makeindex() {  }
******************************/
if($dopost=='makeindex')
{
    require_once(DEDEINC.'/arc.partview.class.php');
    $envs = $_sys_globals = array();
    $envs['aid'] = 0;
    $pv = new PartView();
    $row = $pv->dsql->GetOne('SELECT * FROM `#@__homepageset`');
    $templet = str_replace("{style}", $cfg_df_style, $row['templet']);
    $homeFile = dirname(__FILE__).'/'.$row['position'];
    $homeFile = str_replace("//", "/", str_replace("\\", "/", $homeFile));
    $fp = fopen($homeFile, 'w') or die("�޷�������վ��ҳ����$homeFile λ��");
    fclose($fp);
    $tpl = $cfg_basedir.$cfg_templets_dir.'/'.$templet;
    if(!file_exists($tpl))
    {
        $tpl = $cfg_basedir.$cfg_templets_dir.'/default/index_old.htm';
        if(!file_exists($tpl)) exit("�޷��ҵ���ҳģ�壺$tpl ");
    }
    $GLOBALS['_arclistEnv'] = 'index';
    $pv->SetTemplet($tpl);
    $pv->SaveToHtml($homeFile);
    $pv->Close();
    if( empty($nextdo) )
    {
        ShowMsg("<b>�����ҳ��������������и�������</b>", "close::tgtable");
        exit();
    }
    else
    {
        $jumpurl = GetNextUrl();
        ShowMsg("�����ҳ���£� ������ת��������������...", $jumpurl,0,500);
        exit();
    }
}
/******************************
//�������й�������Ŀ
function makeparenttype() {  }
******************************/
else if($dopost=='makeparenttype')
{
    require_once(DEDEDATA."/cache/inc_catalog_base.inc");
    require_once(DEDEINC.'/arc.listview.class.php');
    $notallowArr = array('dopost', 'f', 'del', 'curpage', 'morejob');

    $jumpurl = GetNextUrl($notallowArr);
    
    if( empty($typeid) )
    {
        ShowMsg("<b>�����Ŀ��������������и�������</b>", "close::tgtable");
        exit();
    }
    $topids = explode(',', GetTopids($typeid));
    if(empty($curpage)) $curpage = 0;
    $tid = $topids[$curpage];
    
    if(isset($cfg_Cs[$tid]) && $cfg_Cs[$tid][1]>0)
    {
        require_once(DEDEINC."/arc.listview.class.php");
        $lv = new ListView($tid);
        $lv->CountRecord();
        $lv->MakeHtml();
        $lv->Close();
    }
    else
    {
        require_once(DEDEINC."/arc.sglistview.class.php");
        $lv = new SgListView($tid);
        $lv->CountRecord();
        $lv->MakeHtml();
        $lv->Close();
    }
    
    if($curpage >= count($topids)-1)
    {
        if( !empty($doposttmp) )
        {
            $jumpurl = preg_replace("#doposttmp|nextdotmp#", 'del', $jumpurl);
            $jumpurl .= "&dopost={$doposttmp}&nextdo={$nextdotmp}";
            ShowMsg("�����Ŀ:{$tid}  ���£�<br /><b>�����Ŀ�������񣬼���ִ�к�������...</b>", $jumpurl,0,500);
            exit();
        }
        else
        {
            ShowMsg("�����Ŀ:{$tid}  ���£�<br /><b>�����Ŀ��������������и�������</b>", "close::tgtable");
            exit();
        }
    }
    else
    {
        $curpage++;
        $jumpurl .= "&curpage={$curpage}&dopost=makeparenttype";
        ShowMsg("�����Ŀ:{$tid}  ���£���������������Ŀ...", $jumpurl,0,500);
        exit();
    }
}